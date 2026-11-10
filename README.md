<h1 align="center">Utsav Mehta</h1>

<p align="center">
  <b>Data engineering · Machine learning · Analytics</b><br>
  <sub>Pune, India · building pipelines, ML tools and dashboards — and writing about how they work</sub>
</p>

<p align="center">
  <a href="https://huggingface.co/spaces/utsavmehta24/Resume_Analyzer"><img src="https://img.shields.io/badge/▶_Try_my_live_demo-Resume_Analyzer-FF9D00?style=for-the-badge&logo=huggingface&logoColor=white" alt="Live demo"></a>
</p>

<p align="center">
  <a href="https://utsavmehta24.github.io/utsavmehta/"><img src="https://img.shields.io/badge/Portfolio-00D9FF?style=flat-square&logo=googlechrome&logoColor=white" alt="Portfolio"></a>
  <a href="https://www.linkedin.com/in/utsav-mehta-462653258/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  <a href="https://medium.com/@utsavmehta24072003"><img src="https://img.shields.io/badge/Medium-12100E?style=flat-square&logo=medium&logoColor=white" alt="Medium"></a>
  <a href="https://x.com/Lucid24by7_io"><img src="https://img.shields.io/badge/X-000000?style=flat-square&logo=x&logoColor=white" alt="X"></a>
  <a href="mailto:utsavmehta24072003@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email"></a>
  <img src="https://komarev.com/ghpvc/?username=utsavmehta24&style=flat-square&color=blueviolet&label=visitors" alt="Profile views">
</p>

---

## About

I work on the data side of software: getting messy data in, making it trustworthy, and turning it into something a person can act on. Most of what's here I built end to end — ingestion, validation, transformation, storage, and the dashboard on top.

I care about the parts people skip. Bad records go to a quarantine path instead of silently corrupting a table. Schemas are explicit. Scores are explainable, so you can trace a number back to the rule that produced it. READMEs say what a project *doesn't* do.

Currently going deeper on streaming and MLOps, and writing up what I learn on Medium.

---

## Featured projects

<table>
<tr>
<td width="50%" valign="top">

### 📄 [Resume Analyzer](https://github.com/utsavmehta24/Resume_Analyzer)
`Python` `Gradio` `pypdf` `NLP`

Compares a PDF resume against a job description and explains the result. Rule-based rather than LLM-backed, so every match traces to a specific rule or keyword alias — no black box.

- Skill extraction with alias handling (`JS` → JavaScript)
- Job description by URL, pasted text, or both
- Transparent keyword-overlap score, documented as an indicator and **not** an ATS score
- Actionable resume feedback: sections, action verbs, measurable achievements, length

**▶ [Live demo on Hugging Face Spaces](https://huggingface.co/spaces/utsavmehta24/Resume_Analyzer)** · MIT licensed

</td>
<td width="50%" valign="top">

### 🏪 [RetailFlow](https://github.com/utsavmehta24/RetailFlow)
`PySpark` `Pydantic` `PostgreSQL` `Docker` `Terraform`

A medallion-architecture retail pipeline that runs entirely on your laptop — no cloud account needed, so anyone can clone it and watch it work.

- **Bronze** — POS CSV + e-commerce JSON land in LocalStack S3 via `boto3`
- **Silver** — Pydantic v2 validates each record; bad rows route to a quarantine prefix instead of failing the run
- **Gold** — PySpark deduplicates on `order_id`, writes Parquet
- **Warehouse** — star schema in PostgreSQL: `fact_orders` with customer, product and date dimensions
- Terraform provisions buckets; Flask + Chart.js orchestrates and visualises

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🛡️ [SecOpsPulse](https://github.com/utsavmehta24/SecOpsPulse)
`Ansible` `Jinja2` `Nginx` `DevSecOps`

Ansible-based auditing for host security posture. Checks firewall rules, open ports and installed-package footprint, then provisions Nginx and renders a live compliance dashboard with Jinja2 templates.

Infrastructure-as-code approach to the audit itself — the check is repeatable and version-controlled, not a checklist someone works through by hand.

</td>
<td width="50%" valign="top">

### 🎓 [PlacementRisk-AI](https://github.com/utsavmehta24/PlacementRisk-AI)
`Python` `scikit-learn` `Risk modelling`

Placement-risk scoring for education lenders. Combines student academic profiles, institute placement history and job-market signals to estimate employment outcomes.

Multi-factor modelling rather than grades alone — the interesting problem is that the strongest signal often isn't the student's own record but the institute's track record in their field.

</td>
</tr>
</table>

---

## Analytics & BI

| Project | What it does | Built with |
|---|---|---|
| [Municipal Real Estate Portal](https://github.com/utsavmehta24/Municipal-real-estate-performance-portal) | US municipal property sales, valuations, zoning subclasses and taxation ratios, 2011–2022, as an executive storyboard | Tableau Public |
| [Student Social Media Analytics](https://github.com/utsavmehta24/Student-social-media-analytics) | Social media use against sleep and academic performance; dark glassmorphic UI with bookmark navigators | Power BI, DAX |
| [Customer Insights EDA](https://github.com/utsavmehta24/Customer-Insights-EDA-Analysis) | Statistical EDA over 10K+ customer records — hypothesis testing and correlation analysis, written up as business recommendations | Python, pandas, seaborn |
| [Sales Data Analysis](https://github.com/utsavmehta24/SalesDataAnalysis) | Amazon sales dashboard with pivot tables and VBA-automated reporting | Excel, VBA |

<details>
<summary><b>More projects</b></summary>

<br>

| Project | What it does | Built with |
|---|---|---|
| [retail-store-sql](https://github.com/utsavmehta24/retail-store-sql) | Retail database with six progressive difficulty levels, basics through joins, subqueries and set operations — built as a teaching resource | MySQL |
| [watson-emotion-detection](https://github.com/utsavmehta24/watson-emotion-detection) | Flask app detecting emotion in text via IBM Watson NLP | Python, Flask |
| [Data-Encryption](https://github.com/utsavmehta24/Data-Encryption) | Encryption/decryption web app that renders ciphertext as scannable QR codes | Flask, cryptography |
| [FundFlow](https://github.com/utsavmehta24/FundFlow) | Fund allocation and portfolio analysis notebooks | Python, Jupyter |
| [AI-Trend-Analysis](https://github.com/utsavmehta24/AI-Trend-Analysis-) | Exploratory analysis of AI adoption trends | Jupyter |
| [mini-devops-project](https://github.com/utsavmehta24/mini-devops-project) | CI/CD and containerisation practice | JavaScript, Docker |
| [Tiny-LLM](https://github.com/utsavmehta24/Tiny-LLM-) | Small language model built to understand transformer internals | JavaScript |
| [DSA codes](https://github.com/utsavmehta24/DSA-2nd-Year-codes-) | Data structures and algorithms practice | Python |

</details>

---

## Tech

**Languages** — Python · SQL · JavaScript · TypeScript · Java · Bash

**Data & pipelines** — PySpark · pandas · Pydantic · PostgreSQL · MySQL · Parquet · star-schema modelling

**Infrastructure** — Docker · Terraform · Ansible · LocalStack · Nginx · AWS (S3, RDS)

**ML & analytics** — scikit-learn · NLP · Power BI · Tableau · Jupyter · Excel/VBA

**Web** — Flask · Gradio · React · Node.js

**Learning right now** — Apache Kafka · Airflow · MLOps tooling · Kubernetes

---

## GitHub

<p align="center">
  <img width="48%" src="https://github-readme-stats.vercel.app/api?username=utsavmehta24&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true" alt="GitHub stats">
  <img width="48%" src="https://streak-stats.demolab.com?user=utsavmehta24&theme=tokyonight&hide_border=true" alt="Streak">
</p>

<p align="center">
  <img width="48%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=utsavmehta24&layout=compact&theme=tokyonight&hide_border=true&langs_count=8" alt="Top languages">
</p>

---

## Get in touch

Open to **data engineering**, **ML engineering** and **analytics engineering** roles and internships, and happy to talk about open-source data tooling or collaborate on something interesting.

Fastest ways to reach me: [LinkedIn](https://www.linkedin.com/in/utsav-mehta-462653258/) or [email](mailto:utsavmehta24072003@gmail.com).

<sub>If you clone something of mine and it breaks, open an issue — I'd genuinely like to know.</sub>
