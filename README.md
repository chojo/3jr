### Requirements
* Ruby 1.9.3
* Rails 3.2.7
* Postgres

### Setup
rake mstwjs:setup 

### Jasmine

* Tests:
spec/javascripts
* Code:
app/assets/javascripts/

* Jasminerice:
    http://&lt;hostname&gt;:&lt;port&gt;/jasmine

Test on Console:
* in working directory spec/javascripts/ jasmine-node <filename>
* with coffeescript: in working directory spec/javascripts/ jasmine-node --coffee <filename>

### Karma
Start Testserver:
* karma start

Configuration:
http://karma-runner.github.io/0.12/config/configuration-file.html
