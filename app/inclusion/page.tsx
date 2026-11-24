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
      { name: 'Men', value: 38 },
      { name: 'Women', value: 13 },
      { name: 'Non-binary', value: 1 },
    ],
    total: 52
  },
  {
    label: 'Sexual Orientation',
    items: [
      { name: 'Heterosexual', value: 42 },
      { name: 'LGBTQ+', value: 5 },
      { name: 'Prefer not to say', value: 4 },
    ],
    total: 51
  },
  {
    label: 'Ethnicity',
    items: [
      { name: 'White', value: 21 },
      { name: 'Chinese', value: 10 },
      { name: 'Indian', value: 5 },
      { name: 'Mixed - White / Asian', value: 4 },
      { name: 'Pakistani', value: 2 },
      { name: 'Korean', value: 2 },
      { name: 'Mixed - White / Black', value: 1 },
      { name: 'Black', value: 1 },
      { name: 'Indonesian', value: 1 },
      { name: 'Malaysian', value: 1 },
      { name: 'Filipino', value: 1 },
      { name: 'Prefer not to say', value: 3 }
    ],
    total: 52
  },
  {
    label: 'Religious Beliefs',
    items: [
      { name: 'Atheist/no religion or belief', value: 29 },
      { name: 'Christian', value: 9 },
      { name: 'Hindu', value: 3 },
      { name: 'Muslim', value: 3 },
      { name: 'Buddhist', value: 2 },
      { name: 'Catholic', value: 2 },
      { name: 'Prefer not to say', value: 3 },
    ],
    total: 51
  },
  {
    label: 'Secondary Schooling (11-16)',
    items: [
      { name: 'School outside the UK', value: 8 },
      { name: 'UK independent or fee-paying school', value: 6 },
      { name: 'UK state-funded grammar or selective school', value: 5 },
      { name: 'UK state-funded comprehensive school', value: 4 },
      { name: 'UK independent school attended on a full bursary', value: 1 },
      { name: 'Home educated', value: 1 },
    ],
    total: 25
  },
  {
    label: 'Pre-Degree Schooling (16-18)',
    items: [
      { name: 'UK state-funded school sixth form', value: 10 },
      { name: 'School outside the UK', value: 7 },
      { name: 'UK independent or fee-paying school', value: 5 },
      { name: 'UK sixth form college', value: 2 },
      { name: 'UK independent school attended on a full bursary', value: 1 },
    ],
    total: 25
  },
  {
    label: 'Subject',
    items: [
      { name: 'Engineering', value: 48 },
      { name: 'Mathematics', value: 4 },
      { name: 'Physics', value: 4 },
      { name: 'Humanities', value: 4},
      { name: 'Materials Science', value: 3 },
      { name: 'Mathematics & Computer Science', value: 2 },
    ],
    total: 65
  },
  {
    label: 'Year Group',
    items: [
      { name: 'First Year', value: 37 },
      { name: 'Second Year', value: 15 },
      { name: 'Third Year', value: 7 },
      { name: 'Fourth Year', value: 5 },
    ],
    total: 64
  }
]

function Bar({ name, value, total }: { name: string; value: number; total: number }) {
  const pct = Math.round((value / total) * 100)
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
              <span className="font-semibold">Sky Alexander</span>, serves as Oxford
              University Racing&apos;s Welfare &amp; Inclusion Officer.
              She is the team&apos;s confidential first point of contact
              for any member who wants to raise a concern about welfare,
              inclusion, or conduct.
            </p>
            <p className="mb-4">
              Concerns can be raised informally with Sky, formally in
              writing, or externally to the Department of
              Engineering Science Welfare Lead or the University
              Harassment Service. Reports are kept confidential
              and retaliation against anyone raising a concern in good
              faith is itself a breach of the Code.
            </p>
            <p>
              Confidential contact:{' '}
              <Link
                href="https://forms.cloud.microsoft/e/PMw1TwrhrL"
                className="underline text-[#FFAB13] hover:text-[#FFAB13]/90"
              >
                Concerns & Welfare Form
              </Link>
            </p>
          </section>

          {/* Demographics */}
          <section className="rounded-lg border bg-white p-8 shadow-sm">
            <h2 className="mb-2 text-2xl font-bold text-oxford-blue">
              Where we are today
            </h2>
            <p className="mb-6 text-sm text-gray-500">
              Results of an anonymous team-wide DEI survey, November 2026.
              {/* n&nbsp;=&nbsp;52 responses and a team-wide course survey, n&nbsp;=&nbsp;65. 
              Percentages may not sum to 100% due to rounding and prefer-not-to-say responses. */}
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {demographics.map((group) => (
                <div key={group.label}>
                  <h3 className="mb-3 text-lg font-semibold text-oxford-blue">
                    {group.label}
                  </h3>
                  {group.items.map((it) => (
                    <Bar key={it.name} name={it.name} value={it.value} total={group.total} />
                  ))}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600">
              We are honest about where we still fall short — particularly
              on gender balance, where women and non-binary members make
              up roughly 27% of survey respondents. Closing that gap is an
              explicit goal for the 2027 recruitment cycle.
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
                A named Welfare &amp; Inclusion Officer on the
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
                  className="text-oxford-blue underline hover:text-[#FFAB13]"
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
