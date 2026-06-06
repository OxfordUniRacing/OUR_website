#!/usr/bin/env python3
"""
Script to create composite SVG files for team merchandise:
1. Team logo in white for front
2. All sponsor logos arranged for back

Then converts to EPS format for printing companies.
"""

import os
import xml.etree.ElementTree as ET
from pathlib import Path
import subprocess

# Define paths
SPONSOR_SVG_DIR = Path('/Users/josh/Library/CloudStorage/OneDrive-Nexus365/Documents/General/OUR4/AA-Competition/Stickers/Formatted Sticker SVGs/Spons')
OUR_LOGO_PATH = Path('/Users/josh/Library/CloudStorage/OneDrive-Nexus365/Documents/General/OUR4/AA-Competition/Document Submission/Event Images Oxford Uni Racing/OUR_Logo.svg')
OUTPUT_DIR = Path.cwd()

# Sponsor files to include (based on t-shirt design)
SPONSORS = [
    'university_of_oxford.svg',
    'department_of_engineering_science.svg',  # Could also use 'DES_2.svg'
    'YASA.svg',
    'RS.svg',
    'elegoo.svg',
    'prusa.svg',
    'davies_craig.svg',
    'oxweld.svg',
    'silverstone_composites.svg',
    'printpool.svg',
    'EuroCircuits.svg',
    'Eplan.svg',
    'Ansys.svg',
    'solidworks.svg',
]

def create_white_logo():
    """Create a white version of the OUR logo for the front of the shirt"""
    print("Creating white OUR logo...")

    # Parse the original logo
    tree = ET.parse(OUR_LOGO_PATH)
    root = tree.getroot()

    # Register namespace to preserve it
    ET.register_namespace('', 'http://www.w3.org/2000/svg')

    # Change all fill colors to white
    for elem in root.iter():
        if 'fill' in elem.attrib:
            if elem.attrib['fill'] not in ['none', 'transparent']:
                elem.attrib['fill'] = '#ffffff'
        if 'stroke' in elem.attrib:
            if elem.attrib['stroke'] not in ['none', 'transparent']:
                elem.attrib['stroke'] = '#ffffff'

    # Save the white logo
    output_path = OUTPUT_DIR / 'OUR_logo_white.svg'
    tree.write(output_path, encoding='unicode', xml_declaration=True)
    print(f"✓ White logo saved to: {output_path}")

    return output_path

def create_sponsor_composite():
    """Create a composite SVG with all sponsor logos arranged for the back of the shirt"""
    print("\nCreating sponsor composite...")

    # Create new SVG with appropriate dimensions (matching t-shirt back width)
    # Using a 12-inch width (typical for t-shirt back) at 96 DPI = 1152px
    canvas_width = 1152
    canvas_height = 1400  # Adjust as needed

    # Create root SVG element
    svg_ns = "http://www.w3.org/2000/svg"
    ET.register_namespace('', svg_ns)
    root = ET.Element('{%s}svg' % svg_ns, {
        'width': str(canvas_width),
        'height': str(canvas_height),
        'viewBox': f'0 0 {canvas_width} {canvas_height}',
        'xmlns': svg_ns
    })

    # Add white background (optional, remove if you want transparent)
    # background = ET.SubElement(root, 'rect', {
    #     'width': str(canvas_width),
    #     'height': str(canvas_height),
    #     'fill': '#002147'  # Oxford Blue background
    # })

    # Layout parameters
    logo_width = 200  # Target width for each logo
    logo_height = 100  # Target height for each logo
    padding = 30
    cols = 4  # 4 logos per row

    x_offset = padding
    y_offset = padding
    col = 0

    available_sponsors = []
    for sponsor_file in SPONSORS:
        sponsor_path = SPONSOR_SVG_DIR / sponsor_file
        if sponsor_path.exists():
            available_sponsors.append((sponsor_file, sponsor_path))
        else:
            print(f"⚠ Warning: {sponsor_file} not found")

    print(f"Found {len(available_sponsors)} sponsor logos")

    for i, (sponsor_name, sponsor_path) in enumerate(available_sponsors):
        print(f"  Adding {sponsor_name}...")

        # Parse sponsor SVG
        sponsor_tree = ET.parse(sponsor_path)
        sponsor_root = sponsor_tree.getroot()

        # Get original dimensions - handle various units
        width_str = sponsor_root.get('width', '100')
        height_str = sponsor_root.get('height', '100')

        # Try to extract viewBox if width/height aren't directly usable
        viewbox = sponsor_root.get('viewBox', '')
        if viewbox:
            parts = viewbox.split()
            if len(parts) == 4:
                orig_width = float(parts[2])
                orig_height = float(parts[3])
            else:
                orig_width = 100
                orig_height = 100
        else:
            # Parse width/height, handling units
            def parse_dimension(dim_str):
                dim_str = str(dim_str).strip()
                for unit in ['px', 'pt', 'mm', 'cm', 'in']:
                    dim_str = dim_str.replace(unit, '')
                try:
                    return float(dim_str)
                except:
                    return 100

            orig_width = parse_dimension(width_str)
            orig_height = parse_dimension(height_str)

        # Calculate scale to fit in box while maintaining aspect ratio
        scale = min(logo_width / orig_width, logo_height / orig_height)
        scaled_width = orig_width * scale
        scaled_height = orig_height * scale

        # Center in the allocated space
        x_pos = x_offset + (logo_width - scaled_width) / 2
        y_pos = y_offset + (logo_height - scaled_height) / 2

        # Create group for this logo with transform
        group = ET.SubElement(root, 'g', {
            'transform': f'translate({x_pos}, {y_pos}) scale({scale})'
        })

        # Copy all elements from sponsor logo to group
        for child in sponsor_root:
            group.append(child)

        # Update position for next logo
        col += 1
        if col >= cols:
            col = 0
            x_offset = padding
            y_offset += logo_height + padding
        else:
            x_offset += logo_width + padding

    # Adjust final canvas height based on actual content
    final_height = y_offset + (logo_height if col > 0 else 0) + padding
    root.set('height', str(int(final_height)))
    root.set('viewBox', f'0 0 {canvas_width} {int(final_height)}')

    # Save composite
    output_path = OUTPUT_DIR / 'sponsors_composite.svg'
    tree = ET.ElementTree(root)
    tree.write(output_path, encoding='unicode', xml_declaration=True)
    print(f"✓ Sponsor composite saved to: {output_path}")

    return output_path

def convert_to_eps(svg_path):
    """Convert SVG to EPS using Inkscape or ImageMagick"""
    eps_path = svg_path.with_suffix('.eps')

    print(f"\nConverting {svg_path.name} to EPS...")

    # Try Inkscape first (best quality for vector conversion)
    try:
        result = subprocess.run(
            ['inkscape', str(svg_path), '--export-filename', str(eps_path), '--export-type=eps'],
            capture_output=True,
            text=True,
            timeout=30
        )
        if result.returncode == 0:
            print(f"✓ EPS file created: {eps_path}")
            return eps_path
    except (subprocess.TimeoutExpired, FileNotFoundError) as e:
        print(f"⚠ Inkscape not available or failed: {e}")

    # Try ImageMagick as fallback
    try:
        result = subprocess.run(
            ['convert', str(svg_path), str(eps_path)],
            capture_output=True,
            text=True,
            timeout=30
        )
        if result.returncode == 0:
            print(f"✓ EPS file created: {eps_path}")
            return eps_path
    except (subprocess.TimeoutExpired, FileNotFoundError) as e:
        print(f"⚠ ImageMagick not available or failed: {e}")

    # Try using cairosvg as Python fallback
    try:
        import cairosvg
        cairosvg.svg2ps(url=str(svg_path), write_to=str(eps_path))
        print(f"✓ EPS file created: {eps_path}")
        return eps_path
    except ImportError:
        print("⚠ cairosvg not available")
    except Exception as e:
        print(f"⚠ cairosvg failed: {e}")

    print(f"⚠ Could not convert to EPS. Please use Inkscape manually:")
    print(f"   inkscape {svg_path} --export-filename={eps_path} --export-type=eps")
    return None

if __name__ == '__main__':
    print("="*60)
    print("Creating merchandise graphics")
    print("="*60)

    white_logo = create_white_logo()
    sponsor_composite = create_sponsor_composite()

    print("\n" + "="*60)
    print("Converting to EPS format for printing")
    print("="*60)

    white_logo_eps = convert_to_eps(white_logo)
    sponsor_composite_eps = convert_to_eps(sponsor_composite)

    print("\n" + "="*60)
    print("Complete!")
    print("="*60)
    print(f"\nSVG Files:")
    print(f"  Front (white logo): {white_logo}")
    print(f"  Back (sponsors):    {sponsor_composite}")

    if white_logo_eps or sponsor_composite_eps:
        print(f"\nEPS Files (for printing):")
        if white_logo_eps:
            print(f"  Front (white logo): {white_logo_eps}")
        if sponsor_composite_eps:
            print(f"  Back (sponsors):    {sponsor_composite_eps}")

    print("\nThese files are ready to send to your merchandise supplier.")
