import { h, FunctionComponent } from "preact";
import { Link } from "preact-router";
import { ROOT } from "../data";

const home = (
  <div>
    <h1 className="text-2xl pb-2">Eviction Navigator</h1>
    <div className="pb-2">
      The following resource is designed to help you navigate the eviction
      process in British Columbia.
      <br />
      It does not constitute legal advice.
    </div>
    <div className="flex justify-center">
      <button
        className="
          text-base text-center
          rounded px-1 py-2 w-2/5
        text-gray-200 bg-blue-700
        hover:text-gray-100 hover:bg-blue-600
        "
      >
        <Link href={`/${ROOT}`}>Navigate Your Eviction</Link>
      </button>
    </div>
    <h1 className="text-2xl pt-4">References</h1>
    This resource is based on information from the following sources. Please
    consult them directly if you desire to know more:
    <div className="pl-8 pt-2">
      <ul className="list-disc">
        <li>
          <a
            href="https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies"
            className="text-blue-900 hover:underline"
          >
            BC Government - Residential Tenancies
          </a>
        </li>
        <li>
          <a
            href="https://tenants.bc.ca"
            className="text-blue-900 hover:underline"
          >
            Tenant Resource and Advisory Center [TRAC]
          </a>
        </li>
        <li>
          <a
            href="https://www.vancouvertenantsunion.ca/eviction_defense_handbook"
            className="text-blue-900 hover:underline"
          >
            VTU Eviction Self Defence Handbook
          </a>
        </li>
      </ul>
    </div>
    <div className="pt-2">
      This resource is also inspired and based on prior work at
      <br />
      <a
        href="https://tenants-talk.ca/contest/"
        className="text-blue-900 hover:underline"
      >
        https://tenants-talk.ca/contest
      </a>
    </div>
  </div>
);

export const Home: FunctionComponent = () => {
  return home;
};
