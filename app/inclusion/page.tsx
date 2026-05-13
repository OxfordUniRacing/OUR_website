import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Diversity & Inclusion | Oxford University Racing',
  description:
    "Oxford University Racing's Diversity, Equity & Inclusion policy, welfare structures, and ongoing initiatives to make motorsport open to everyone.",
}

const demographics = [
  {
    label: 'Gender',
    items: [
      { name: 'Men', value: 32 },
      { name: 'Women', value: 8 },
      { name: 'Non-binary', value: 1 },
    ],
  },
  {
    label: 'Ethnicity',
    items: [
      { name: 'White', value: 20 },
      { name: 'Asian / Asian British', value: 14 },
      { name: 'Mixed background', value: 4 },
      { name: 'Arab', value: 1 },
      { name: 'Other', value: 2 },
    ],
  },
  {
    label: 'International members',
    items: [
      { name: 'UK domiciled', value: 27 },
      { name: 'International', value: 14 },
    ],
  },
  {
    label: 'Secondary schooling',
    items: [
      { name: 'State comprehensive', value: 17 },
      { name: 'State grammar', value: 7 },
      { name: 'Private', value: 11 },
      { name: 'Other / prefer not to say', value: 6 },
    ],
  },
  {
    label: 'LGBTQ+',
    items: [
      { name: 'LGB+', value: 6 },
      { name: 'Heterosexual', value: 32 },
      { name: 'Prefer not to say', value: 3 },
    ],
  },
]

const TOTAL = 41

function Bar({ name, value }: { name: string; value: number }) {
  const pct = Math.round((value / TOTAL) * 100)
  return (
    <div className="mb-2">
      <div className="flex justify-between text-sm text-gray-700">
        <span>{name}</span>
        <span className="tabular-nums text-gray-500">
          {value} &middot; {pct}%
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-oxford-blue"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default function InclusionPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-oxford-blue">
            Diversity, Equity &amp; Inclusion
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            We build better cars when every member can contribute fully.
            This page sets out what that means for Oxford University Racing
            in practice: our policy, our welfare structures, who to talk to,
            and what we are doing about it.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-16">
          {/* Commitment */}
          <section className="rounded-lg border bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-oxford-blue">
              Our commitment
            </h2>
            <p className="mb-4 text-gray-700">
              Motorsport has a long-standing diversity problem. As a
              student-run Formula Student team, we treat that as something
              to actively solve rather than a status quo to manage around.
              We welcome members across all dimensions of identity,
              including gender, sexual orientation, ethnicity, nationality,
              disability and neurodivergence, religion or belief, and
              socio-economic background.
            </p>
            <p className="text-gray-700">
              Our full{' '}
              <span className="font-semibold">
                Diversity, Equity &amp; Inclusion policy
              </span>{' '}
              and{' '}
              <span className="font-semibold">Code of Conduct</span> set out
              what we expect of every member, how we recruit, and how we
              measure progress. Both documents are available on request.
            </p>
          </section>

          {/* Welfare */}
          <section className="rounded-lg bg-oxford-blue p-8 text-white">
            <h2 className="mb-4 text-2xl font-bold">
              Welfare &amp; Inclusion Officer
            </h2>
            <p className="mb-4">
              <span className="font-semibold">Jon Soepadmo</span>, in
              addition to his role as Technical Manager, serves as Oxford
              University Racing&apos;s Welfare &amp; Inclusion Officer.
              He is the team&apos;s confidential first point of contact
              for any member who wants to raise a concern about welfare,
              inclusion, or conduct.
            </p>
            <p className="mb-4">
              Concerns can be raised informally with Jon, formally in
              writing to the Team Principal, or externally to the
              Department of Engineering Science Welfare Lead or the
              University Harassment Service. Reports are kept confidential
              and retaliation against anyone raising a concern in good
              faith is itself a breach of the Code.
            </p>
            <p>
              Confidential contact:{' '}
              <a
                href="mailto:welfare@oxforduniracing.com"
                className="underline hover:text-oxford-peach"
              >
                welfare@oxforduniracing.com
              </a>
            </p>
          </section>

          {/* Demographics */}
          <section className="rounded-lg border bg-white p-8 shadow-sm">
            <h2 className="mb-2 text-2xl font-bold text-oxford-blue">
              Where we are today
            </h2>
            <p className="mb-6 text-sm text-gray-500">
              Results of an anonymous team-wide DEI survey, November 2025.
              n&nbsp;=&nbsp;41 responses. Percentages may not sum to 100%
              due to rounding and prefer-not-to-say responses.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {demographics.map((group) => (
                <div key={group.label}>
                  <h3 className="mb-3 text-lg font-semibold text-oxford-blue">
                    {group.label}
                  </h3>
                  {group.items.map((it) => (
                    <Bar key={it.name} name={it.name} value={it.value} />
                  ))}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600">
              We are honest about where we still fall short — particularly
              on gender balance, where women and non-binary members make
              up roughly 22% of survey respondents. Closing that gap is an
              explicit goal for the 2026 recruitment cycle.
            </p>
          </section>

          {/* What we are doing */}
          <section className="rounded-lg border bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-oxford-blue">
              What we are doing
            </h2>
            <ul className="list-disc space-y-3 pl-6 text-gray-700">
              <li>
                <span className="font-semibold">Measurement.</span> An
                anonymous team-wide DEI demographics survey is run at
                least once per season, with results published internally
                and used to inform the next recruitment cycle.
              </li>
              <li>
                <span className="font-semibold">Welfare structure.</span>{' '}
                A named Welfare &amp; Inclusion Officer on the leadership
                team, with three independent reporting routes (internal,
                departmental, university).
              </li>
              <li>
                <span className="font-semibold">Recruitment reach.</span>{' '}
                Open positions are advertised through at least one channel
                aimed at under-represented groups in addition to general
                channels, and we state explicitly that no prior motorsport
                experience is required.
              </li>
              <li>
                <span className="font-semibold">Inclusive operations.</span>{' '}
                Workshop sessions are published in advance with daytime
                options; PPE is stocked in a full range of sizes; major
                religious observances are acknowledged in team planning.
              </li>
              <li>
                <span className="font-semibold">Outreach.</span> We use
                our visibility to run outreach aimed at state-school
                students, women, and other groups under-represented in
                engineering and motorsport.
              </li>
              <li>
                <span className="font-semibold">Allyship.</span> OUR
                supports{' '}
                <a
                  href="https://racingpride.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-oxford-blue underline hover:text-oxford-peach"
                >
                  Racing Pride
                </a>
                , the international movement for LGBTQ+ inclusion in
                motorsport.
              </li>
            </ul>
          </section>

          {/* Get involved */}
          <section className="rounded-lg bg-gray-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-oxford-blue">
              Get in touch
            </h2>
            <p className="mb-4 text-gray-700">
              If you are a prospective member, a partner organisation, or
              a journalist with questions about our inclusion work, we are
              happy to talk. For welfare concerns, contact Jon directly at
              the address above. For everything else, use the team
              contact form.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-md bg-oxford-blue px-5 py-2 text-white transition-colors hover:bg-oxford-royal"
            >
              Contact the team
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
