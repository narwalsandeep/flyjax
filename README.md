# flyjax
version 1.0.0

### Description
Ajax enable any html form and preconfigured it with jQuery Noty plugin. 
Click to see <a href="http://ned.im/noty/#/about">noty</a> plugin
 
### Features
- Ajax enable any form
- Ajax enable any form
- Inbuild with Noty Plugin <a href="http://ned.im/noty/#/about">link to noty website</a>
- Support Success and Failure Callback
- Option to disable Submit Button
- Auto fallback of original submit button value when ajax call finishes

### Usage
> $(IDENTIFIER).flyjax(options, successCallback,failureCallback);

### Requirement

- source.js and noty.js (both provided)
- Form must have the attribute 'flyjax' like below 
  <form method="post" flyjax action="foo.php">
- There must be a 'button' with type="submit"

### Roadmap
Allow file uploads

### Demo
download source and form.html has demo
					
