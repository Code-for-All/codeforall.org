---
layout: post
title:  "Code for Romania x ePanstwo — Crowdsourcing Data"
author: Nuela Ada
banner: ./assets/images/blog/1*k-HMSeluLvegVBYtRuaXrA.png
medium: https://medium.com/code-for-all/code-for-romania-x-epanstwo-crowdsourcing-data-ce8351821e16?source=rss----77bd73f07099--collaboration
---

![](https://cdn-images-1.medium.com/max/1024/1*k-HMSeluLvegVBYtRuaXrA.png)

Image: [http://moonsheep.org/](http://moonsheep.org/)

In 2017, [TransparenCEE](http://transparencee.org/) Product Manager Krzysztof Madejski, was invited to participate at the second edition of [The Engine Room](http://www.theengineroom.org/)’s [replication sprint](https://www.theengineroom.org/microtasking-to-fight-corruption-reflecting-on-our-latest-replication-sprint-in-eastern-europe/). The goal was to deploy a technical solution to support two organizations; Hungarian [K-Monitor](http://k-monitor.hu/), a platform that turns MPs’ asset declarations into open data and Ukraine [OPORA](https://www.oporaua.org/en), a platform that opens reports listing donations to political parties. During the week-long sprint, the team discovered it would not be possible to deliver a solution for both organizations — only K-Monitor.

Needing a tool to deliver for both organizations, they saw that the original solution was not really a good fit for what they wanted to do.

The search for a more robust technology tool led to TransparenCEE (a community of nonprofit, information technology, and media organizations in Central and Eastern Europe) organizing a design sprint event in Jahorina, Bosnia and Hertzegovina, just before the [POINT conference](https://point.zastone.ba/point/). The first step at the event was to review available [crowdsourcing platforms](https://library.theengineroom.org/microtasking/) and assess their needs. After the sprint, the TransparenCEE team knew that none of the existing tools filled their needs and they mapped out a clear plan of what they wanted to develop.

The idea was to develop a custom-tailored tool — [Moonsheep](http://moonsheep.org/), that can save resources, make complex data easy to read and be reproduced for low-tech organizations.

“It all aligned with our TransparenCEE initiative, in which we had grant money for a project on open data,” said Madejski, who is also the director of the Moonsheep Project and [ePanstwo Foundation](https://epf.org.pl/en/) Program Coordinator. “We, the TransparenCEE team, have decided to invest in developing a tool that would fit organizations’ needs.”

> Moonsheep, launched early this year, is a platform that allows organizations to liberate data from portable document formats (PDFs) through crowdsourcing campaigns. Using the concept of microtasking and data modelling, Moonsheep turns complex documents and handwritten documents into structured data. The structured data is available in spreadsheets, comma separated values, or JavaScript object notation application programming interfaces.

Documents to be listed are opened on a dedicated website and volunteers are engaged to transcribe them online using [crowdsourcing](https://github.com/themoonsheep/moonsheep) and [microtasking](https://library.theengineroom.org/microtasking/) strategies. The software aides in input verification and automatically flags inputs as verified if entries from several users match. If there are inconsistencies, they are flagged to be checked by moderators.  
  
The Moonsheep project is a collaboration between the [Code for Romania](https://code4.ro/) and ePanstwo Foundation. Code for Romania and ePanstwo Foundation are partners of [Code for All](http://codeforall.org/), an international network of organizations that believes in using digital technology to empower citizens and create positive impact in communities.

According to Madejski, the development team had a very defined use case which was opening complex structured data from tons of scans. The [small Moonsheep community](http://moonsheep.org/acknowledgements) has led several deployments of Moonsheep-like tools before so there was a lot of internal knowledge to tap into.

> “Moonsheep is unique because with quite limited development resources you can make a portal that changes scans into relational database. We’ve learned that each case and dataset is unique and we had to keep that in mind while developing Moonsheep,” explains Madejski.

Tin Geber, creative strategist, technologist and former design and technology lead for The Engine Room was one of those responsible for designing Moonsheep. According to him, in designing Moonsheep, the team did their best to avoid a technology-first approach.

“Moonsheep is a combination of human-centered design, extensive testing, and a mix of new and existing technological solutions. It has been developed for very specific type of document liberation — heaps of un-scannable PDFs, with mostly repeating information, where human eyes work better than optical character recognition,” he said.

Moonsheep has in the past, utilized open source code from [CrowData](http://crowdata.github.io/), and [PYBOSSA](https://pybossa.com/). Crowdata, the open-source version of the code behind [VozData](http://vozdata.lanacion.com.ar/) was originally developed by [La Nación](https://www.lanacion.com.ar/), an Argentine newspaper and then later replicated by Engine Room to help Mexican journalists transcribe spending data of officials.

With Moonsheep, organizations can plan their projects, collect data, create digitization flow, manage crowdsourcing and analyze raw data. Researchers can crowdsource and automate their data collection, libraries and museums can improve metadata and digitize content to extract new meanings from their exhibits and items. Organizations can also import documents from external sources and integrate Moonsheep with their application programming interfaces to deliver transcription services.

Radu Stefanescu, project coordinator for Code for Romania, a nonprofit using technology to solve social problems, believes that Moonsheep is a more flexible platform in terms of defining the working tasks in the system.  
“Right now we are building a solution, based on Moonsheep as a framework, that will empower our volunteers and other nonprofit organizations to turn this large number of paper documents to digital records, that can be queried, organized and aggregated into more meaningful information. Moonsheep is helping us bridge the gap and advance to a fully digitized aggregation platform, holding all relevant data of political figures,” he said.

> Currently, Code for Romania is using Moonsheep to [build](https://github.com/code4romania/project-template) a platform to extract information from public figures asset declarations. The target is to use Moonsheep to parse and digitize 3000 documents.

Vagyonnyilatkozatok Hajnala, an event organized by K-Monitor where a dozens of volunteers transcribe published declarations is using Moonsheep to digitalize mass amount of data from scanned pdfs. With Moonsheep, the volunteers could transform more than 2000 pages of scanned PDFs into a database.

“It was great to explore that other NGOs are struggling with similar issues and the idea to cooperate and find a common solution is really motivating,” said Juhasz Attila, project coordinator for K-Monitor. “However, it was harder than I expected to focus on more than just developing a single tool for our needs: with Moonsheep we had to think about scalability,” he told Code for All.

Moonsheep which started off as a big hackathon, has grown including the number of people and organizations interested in Moonsheep. A quick look at Moonsheep dedicated channel on the [](http://slack.transparencee.org/) [TransparenCEE’s Slack](https://slack.transparencee.org/) shows that there are more than 145 registered members. Marit Brademannn, scrum master and one of the early facilitators in the very first development phase of Moonsheep noted that one of the challenges they battled with at the beginning was internet connection but this was tackled during the the post-development phase.

“I had a great experience, it was my first proper design sprint. The way we worked was very focused and super collaborative,” Dimitri Stamatis, one of the pro-bono experts told Code for All. “We had representatives from all phases plus the stakeholders, a specific process and a great location that offered unobstructed work and amazing food.”

Other organizations which also supported the development of Moonsheep include [Open Data Kosovo](http://opendatakosovo.org/), a nonprofit bringing government transparency and accountability in Kosovo through technology and developers for Amnesty International’s [Decode Darfur project](https://decoders.amnesty.org/projects/decode-darfur). The Engine Room, an international organization that helps activists, organizations and other social change agents make the most of data and technology and K-Monitor, a nonprofit that uses technology to promote transparency and accountability of public spending in Hungary.

For Madejski, it was important gathering experienced people to put on the paper what was in people’s heads.

“What I love about working on Moonsheep, is that it grew with several organizations supporting it as project owners, and several senior IT people working on it pro-bono. We are all working on the same goal so there is no competition, but teamwork,” he said.

![](https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=ce8351821e16)

* * *

[Code for Romania x ePanstwo — Crowdsourcing Data](https://medium.com/code-for-all/code-for-romania-x-epanstwo-crowdsourcing-data-ce8351821e16) was originally published in [Code for All](https://medium.com/code-for-all) on Medium, where people are continuing the conversation by highlighting and responding to this story.