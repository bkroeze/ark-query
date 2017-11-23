Ark Query
=========
This is a little commandline tool which checks an ARK account for recent transactions matching a given pattern, within a given date range.

I wrote it because the profits from ARK dPOS voting are nice, but the daily entries make my tax accounting a hassle.
Using [CoinTracking.info](https://cointracking.info?ref=B456545), I can get a tax report, down to the tiniest fraction of what I've earned daily.

If you use this app, please consider donating some ARK to me at: AUhmkVVYAZhqgM8mzRLaCUpZSHXk9e534Q

Heck, if you put a note in the transaction mentioning ark-query and giving me a name to credit, I'll add you to my contributor list here.  It will be easy to find, I'll just use this tool. :)

Read the [API](./docs/API.md) to use a tight and small client library, or just install and use the executable.

Installation:

```npm install -g ark-query```

After that, you can run the tool with "arkq".  For example:

See the current balance on an account in the main net: ```arkq balance --main --account="AUhmkVVYAZhqgM8mzRLaCUpZSHXk9e534Q"```

See all transactions on an account in the main net: ```arkq transactions --main --account="AUhmkVVYAZhqgM8mzRLaCUpZSHXk9e534Q"```

---

Copyright 2017, Bruce Kroeze, all rights reserved.
