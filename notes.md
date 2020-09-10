<!-- Project Set-Up -->

- index.html, styles.css, index.js

<!-- HTML, Bootstrap, Getting Set Up -->

1. obtain github api key
2. get bootstrap starter template: https://getbootstrap.com/docs/4.5/examples/
3. copy + paste source code
4. eliminate extra code
5. simplex theme download: https://bootswatch.com/simplex/

- help > bootstrapCDN > copied simplex cdn

6. obtain bootstrap javascript cdn
7. obtain jquery cdn
8. our app is set-up, let's remove top-nav fixed class, li's from ul and re-write our navbar to read "Github Finder"
9. rename searchContainer, add padding back
10. add h1, p, input field with bootstrap class, create div with the id=profile; we'll dynamically insert info here

<!-- Obtain Github API -->
<!--
a) https://github.com/settings/applications/new
b) name: gh-finder
c) http://localhost
d) simple github profile finder
e) http://localhost
-->

        client_id: "6d36336aa6984801e77f",
        client_secret: "dd4452c7035053dcccf08db78e1d36a8e02c9973",

1. open index.js > write doc.ready > console.log to ensure jquery has linked
2. view github's api documentation
3. "by default, all requests to https://api.github.com/ receive v3 of the REST API data"
4. open in firefox browser > hit "raw data" to view a possible response
5.

<!-- API: Application Programming Interface -->

- CRM's are often quoted to be "easy to use API"
- customers use API to fetch and process data collected by the CRM
- literacy is required; because while all of us won't be software engineers, a lot of you will work with CRM's in your lifetime + some of you will go ahead and become data analysts
- due to the lack of literacy, a lot of companies hire companies like Tableau to interpret results from their CRM tools

  - this is your tech advantage

  "In general, APIs define the rules that programmers must follow in order to interact with a programming language, a software library, or any other software tool. Lately though, the term API is most often used to describe a particular kind of web interface. These Web APIs are a set of rules for interacting with a webserver (such as a Salesforce server), with the most common use case being data retrieval. API’s provide mechanisms for CRM customers to access and manipulate data stored by the API provider (Salesforce in this example). The user makes a “request” to a Salesforce webserver, that webserver accesses a Salesforce database (with the customers data), and returns it to the requester in a “response”."

  source: https://medium.com/@TebbaVonMathenstien/what-is-an-api-and-why-should-i-use-one-863c3365726b

<!-- Why API's -->

- making data available to use means new products can be created with existing data, creates customers that eventually find themselves back to origin company
- "Another benefit of Web APIs is that, because they are built around the HTTP protocol, nearly any programming language can be used to access them. Python, R, Java, JavaScript, Ruby, and every other general purpose programming language has at least one HTTP library to make this process easier. However, more specialist languages like SQL do not have HTTP libraries."
