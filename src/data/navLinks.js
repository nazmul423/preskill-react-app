const navLinks = [
  {
    name: "PreFuture",
    children: [
      {
        name: "Present Skill All",
        children: [
          {
            name: "Cloud Computing",
            children: [
              {
                name: "Oracle",
                children: [
                  { name: "Fusion SCM", path: "/oracle/fusion-scm" },
                  { name: "Access Manager", path: "/oracle/access-manager" },
                  { name: "Identity Manager", path: "/oracle/identity-manager" },
                  { name: "OAF", path: "/oracle/oaf" },
                  { name: "Exadata", path: "/oracle/exadata" },
                ],
              },
              {
                name: "Salesforce",
                children: [
                  {
                    name: "Vlocity",
                    children: [
                      { name: "CPQ", path: "/salesforce/vlocity/cpq" },
                      { name: "OmniStudio", path: "/salesforce/vlocity/omni" },
                    ],
                  },
                  { name: "Admin", path: "/salesforce/admin" },
                  { name: "Developer", path: "/salesforce/developer" },
                  { name: "Marketing Cloud", path: "/salesforce/marketing-cloud" },
                  { name: "CRM", path: "/salesforce/crm" },
                  { name: "CPQ", path: "/salesforce/cpq" },
                  { name: "DX", path: "/salesforce/dx" },
                  { name: "Sales Cloud", path: "/salesforce/sales-cloud" },
                  { name: "Pardot", path: "/salesforce/pardot" },
                  { name: "Lightning", path: "/salesforce/lightning" },
                  { name: "Billing", path: "/salesforce/billing" },
                ],
              },
              {
                name: "Microsoft Azure",
                children: [
                  {
                    name: "Azure AZ",
                    children: [
                      { name: "AZ-103", path: "/azure/az-103" },
                      { name: "AZ-104", path: "/azure/az-104" },
                      { name: "AZ-203", path: "/azure/az-203" },
                      { name: "AZ-204", path: "/azure/az-204" },
                      { name: "AZ-301", path: "/azure/az-301" },
                      { name: "AZ-303", path: "/azure/az-303" },
                      { name: "AZ-304", path: "/azure/az-304" },
                      { name: "AZ-400", path: "/azure/az-400" },
                      { name: "AZ-500", path: "/azure/az-500" },
                      { name: "AZ-900", path: "/azure/az-900" },
                      { name: "AZ-300", path: "/azure/az-300" },
                    ],
                  },
                  {
                    name: "Azure DP",
                    children: [
                      { name: "DP-200", path: "/azure/dp-200" },
                      { name: "DP-201", path: "/azure/dp-201" },
                      { name: "DP-300", path: "/azure/dp-300" },
                      { name: "DP-900", path: "/azure/dp-900" },
                    ],
                  },
                  {
                    name: "Azure AI",
                    children: [
                      { name: "AI-900", path: "/azure/ai-900" },
                      { name: "AI-100", path: "/azure/ai-100" },
                    ],
                  },
                ],
              },
              {
                name: "HCM",
                children: [
                  { name: "Workday HCM", path: "/hcm/workday-hcm" },
                  { name: "Workday Integration", path: "/hcm/integration" },
                  { name: "Workday Finance", path: "/hcm/finance" },
                  { name: "Workday SCM", path: "/hcm/scm" },
                  { name: "Workday Revenue", path: "/hcm/revenue" },
                  { name: "Workday Payroll", path: "/hcm/payroll" },
                  { name: "Workday Benefits", path: "/hcm/benefits" },
                  { name: "Workday Studio", path: "/hcm/studio" },
                  { name: "Advanced Studio", path: "/hcm/advanced-studio" },
                  { name: "Workday Recruiting", path: "/hcm/recruiting" },
                  { name: "Workday LMS", path: "/hcm/lms" },
                  { name: "Prism Analytics", path: "/hcm/prism" },
                  { name: "Workday Reporting", path: "/hcm/reporting" },
                ],
              },
              {
                name: "ERP",
                children: [
                  {
                    name: "GuideWire",
                    children: [
                      { name: "Claim Center", path: "/erp/claim-center" },
                      { name: "Policy Center", path: "/erp/policy-center" },
                      { name: "Billing Center", path: "/erp/billing-center" },
                    ],
                  },
                  {
                    name: "Netsuite",
                    children: [
                      { name: "Technical", path: "/erp/netsuite-technical" },
                      { name: "Functional", path: "/erp/netsuite-functional" },
                    ],
                  },
                ],
              },
              {
                name: "Adobe",
                children: [
                  { name: "AEM", path: "/adobe/aem" },
                  { name: "Adobe Analytics", path: "/adobe/analytics" },
                  { name: "Marketing Cloud", path: "/adobe/marketing-cloud" },
                  { name: "Experience Cloud", path: "/adobe/experience-cloud" },
                ],
              },
              { name: "Kronos", path: "/kronos" },
              { name: "Dayforce", path: "/dayforce" },
              { name: "AWS", path: "/aws" },
              { name: "ServiceNow", path: "/servicenow" },
              { name: "OpenStack", path: "/openstack" },
            ],
          },
          {
            name: "Cyber Security",
            children: [
              {
                name: "EC Council",
                children: [
                  { name: "CCISO", path: "/cyber/ec/cciso" },
                  { name: "CEH V11", path: "/cyber/ec/ceh-v11" },
                  { name: "Certified Application Security Engineer Java", path: "/cyber/ec/case-java" },
                  { name: "Certified SOC Analyst", path: "/cyber/ec/csa" },
                  { name: "CND V2", path: "/cyber/ec/cnd" },
                  { name: "CHFI V9", path: "/cyber/ec/chfi" },
                  { name: "CTIA", path: "/cyber/ec/ctia" },
                  { name: "CASE .NET", path: "/cyber/ec/case-net" },
                  { name: "ECSA", path: "/cyber/ec/ecsa" }
                ]
              },
              {
                name: "ISO",
                children: [
                  { name: "ISO IEC20000", path: "/cyber/iso/20000" },
                  { name: "ISO IEC27001", path: "/cyber/iso/27001" },
                  { name: "ISO9001", path: "/cyber/iso/9001" },
                  { name: "ISO22301", path: "/cyber/iso/22301" },
                  { name: "ISO 2000 ITSM LI", path: "/cyber/iso/itsm" },
                  { name: "ISO 37001 Lead Auditor", path: "/cyber/iso/37001" }
                ]
              },
              {
                name: "Cloud",
                children: [
                  {
                    name: "Amazon AWS",
                    children: [
                      { name: "Cloud Practitioner", path: "/aws/cloud-practitioner" },
                      { name: "Security Specialty", path: "/aws/security" },
                      { name: "Solutions Architect Associate", path: "/aws/sa-associate" },
                      { name: "Solutions Architect Professional", path: "/aws/sa-pro" },
                      { name: "SysOps", path: "/aws/sysops" }
                    ]
                  },
                  { name: "CCSK", path: "/cloud/ccsk" },
                  { name: "CCSP", path: "/cloud/ccsp" }
                ]
              },
              { name: "CompTIA", path: "/cyber/comptia" },
              { name: "Security Testing", path: "/cyber/testing" },
              { name: "ISC2", path: "/cyber/isc2" },
              { name: "Career Oriented", path: "/cyber/career" },
              { name: "ISACA", path: "/cyber/isaca" },
              { name: "Data Privacy", path: "/cyber/privacy" },
              { name: "SOC", path: "/cyber/soc" },
              { name: "DevOps", path: "/cyber/devops" },
              { name: "CISCO", path: "/cyber/cisco" }
            ]
          },
          {
            name: "IAM Tools",
            children: [
              { name: "Okta", path: "/iam/okta" },
              { name: "Saviynt", path: "/iam/saviynt" },
              { name: "Forgerock", path: "/iam/forgerock" },
              { name: "Centrify", path: "/iam/centrify" },
              { name: "AWS IAM", path: "/iam/aws" },
              {
                name: "CA",
                children: [
                  { name: "CA Identity Governance", path: "/iam/ca/governance" },
                  { name: "CA Identity Manager", path: "/iam/ca/manager" },
                  { name: "CA SiteMinder", path: "/iam/ca/siteminder" }
                ]
              },
              { name: "IBM", path: "/iam/ibm" },
              {
                name: "Ping",
                children: [
                  { name: "Ping Identity", path: "/iam/ping/identity" },
                  { name: "Ping Access", path: "/iam/ping/access" },
                  { name: "Ping Federate", path: "/iam/ping/federate" }
                ]
              }
            ]
          },
          {
            name: "Business Intelligence",
            children: [
              { name: "Dell Boomi", path: "/bi/dell-boomi" },
              { name: "Snowflake", path: "/bi/snowflake" },
              { name: "QlikSense", path: "/bi/qlik-sense" },
              {
                name: "Informatica",
                children: [
                  { name: "Informatica Cloud", path: "/bi/informatica/cloud" },
                  { name: "Informatica MDM", path: "/bi/informatica/mdm" },
                  { name: "Informatica IDQ", path: "/bi/informatica/idq" },
                  { name: "Informatica PIM", path: "/bi/informatica/pim" },
                  { name: "Informatica ILM", path: "/bi/informatica/ilm" }
                ]
              },
              { name: "Power BI", path: "/bi/power-bi" },
              { name: "Datastage", path: "/bi/datastage" },
              { name: "Talend", path: "/bi/talend" },
              { name: "Microstrategy", path: "/bi/microstrategy" },
              { name: "Tibco Spotfire", path: "/bi/tibco-spotfire" }
            ]
          },
          {
            name: "DevOps",
            children: [
              { name: "Kubernetes", path: "/dev/k8s" },
              { name: "Terraform", path: "/dev/terraform" },
              { name: "Ansible", path: "/dev/ansible" },
            ],
          },
          {
            name: "Data Science",
            children: [{ name: "Alteryx", path: "/data-science/alteryx" }]
          },
          {
            name: "RPA",
            children: [
              { name: "Automation Anywhere", path: "/rpa/automation-anywhere" },
              { name: "Blue Prism", path: "/rpa/blue-prism" },
              { name: "Openspan", path: "/rpa/openspan" },
              {
                name: "UiPath",
                children: [
                  { name: "UiPath", path: "/rpa/uipath" },
                  { name: "UiPath StudioX", path: "/rpa/uipath-studiox" }
                ]
              }
            ]
          },
          {
            name: "Pega",
            children: [
              { name: "PCBA", path: "/pega/pcba" },
              { name: "CSA", path: "/pega/csa" },
              { name: "CSSA", path: "/pega/cssa" }
            ]
          },
          {
            name: "More Courses",
            children: [
              { name: "SPSS", path: "/more/spss" },
              { name: "Sitecore", path: "/more/sitecore" },
              { name: "Liferay", path: "/more/liferay" },
              { name: "Apigee", path: "/more/apigee" },
              { name: "Grunt", path: "/more/grunt" },
              { name: "Tosca", path: "/more/tosca" },
              { name: "Ginger Automation", path: "/more/ginger-automation" },
              { name: "Fortinet", path: "/more/fortinet" },
              { name: "Palo Alto", path: "/more/palo-alto" }
            ]
          }
        ]
      },
      {
        name: "Future Skill",
        children: [
              { name: "AGI", path: "/newest/agi" },
    { name: "Autonomous Systems", path: "/newest/autonomous-systems" },
    { name: "Quantum Computing", path: "/newest/quantum-computing" },
    { name: "Edge Computing", path: "/newest/edge-computing" },
    { name: "Robotics", path: "/newest/robotics" },
    { name: "Digital Twin", path: "/newest/digital-twin" },
    { name: "AI", path: "/newest/ai" }

        ]
      }
    ]
  },

  {
    name: "Find a Mentor",
    children: [
      {
        name: "Bangladeshi Experts",
        children: [
          { name: "All Experts", path: "/mentors/all" },
          { name: "Featured Experts", path: "/mentors/featured" },
          { name: "Industry Experts", path: "/mentors/industry" },
        ],
      },
      {
        name: "Expert Details",
        children: [
          { name: "Profile", path: "/mentor/profile" },
          { name: "Skills", path: "/mentor/skills" },
          { name: "Certifications", path: "/mentor/cert" },
          { name: "Availability", path: "/mentor/time" },
        ],
      },
      {
        name: "Success Stories",
        children: [
          { name: "Student Feedback", path: "/mentor/feedback" },
          { name: "Career Growth", path: "/mentor/growth" },
        ],
      },
    ],
  },

  {
  name: "Experts & Beneficiaries",
  children: [
    {
      name: "Experts",
      children: [
        { name: "All Experts", path: "/experts/all" },
        { name: "Industry Experts", path: "/experts/industry" },
        { name: "Certified Experts", path: "/experts/certified" },
        { name: "Top Rated Experts", path: "/experts/top-rated" }
      ]
    },

    {
      name: "Beneficiaries",
      children: [
        { name: "Students", path: "/beneficiaries/students" },
        { name: "Job Seekers", path: "/beneficiaries/job-seekers" },
        { name: "Professionals", path: "/beneficiaries/professionals" },
        { name: "Corporate Learners", path: "/beneficiaries/corporate" }
      ]
    },

    {
      name: "Programs",
      children: [
        { name: "Mentorship Program", path: "/programs/mentorship" },
        { name: "Skill Development", path: "/programs/skill-dev" },
        { name: "Career Growth", path: "/programs/career-growth" }
      ]
    }
  ]
},

{
  name: "Canal to Crop", 
  children: [
    // এই ৩টি আইটেম এখন উপরে দেখাবে
    { name: "Expertise", path: "/canal/expertise" }, // নতুন
    { name: "Ongoing Projects", path: "/canal/projects" }, // নতুন (Still Projects)
    { name: "Project Analysis", path: "/canal/analysis" },
    { name: "Implementation", path: "/canal/implement" },    
    // Agriculture এখন ড্রপডাউনের নিচে চলে আসবে
    {
      name: "Agriculture", 
      children: [
        { name: "Smart Farming", path: "/innov/farming" },
        { name: "Hydroponics", path: "/innov/hydro" },
      ],
    },
  ],
},
{
  name: "Languages",
  path: "#", // মেইন মেনুর জন্য পাথ
  children: [
    { code: "US", name: "English", flag: "us", path: "#" },
    { code: "BD", name: "বাংলা", flag: "bd", path: "#" },
    { code: "FR", name: "French", flag: "fr", path: "#" },
    { code: "JP", name: "Japanese", flag: "jp", path: "#" },
    { code: "DE", name: "German", flag: "de", path: "#" },
    { code: "KR", name: "Korean", flag: "kr", path: "#" },
{ code: "CN", name: "Chinese", flag: "cn", path: "#" },
  ],
},

{ name: "Career", path: "/courses" },
{ name: "Contact", path: "/contact" },
];

export default navLinks;