**Let anyone crowfund dApp features.**

There are 3 steps:

1. A developer sets a funding goal for an issue,
2. A funder funds the issue,
3. The dev builds the feature and collects the bounty.

**Tech we need:**

- **a github action (python)**, turning github issues into a neat website (we can modify [this existing script](https://github.com/mattduck/gh2md/issues/13))
- an escrow **smart contract**
- a service that watches the escrow contract
- a PR bot that shows the funding/transaction status (similar to [this trust wallet bot](https://github.com/trustwallet/assets/pull/4896))
- optional: **a chrome extension** that updates the funding UI on github (and collect feedback in the dApp, or on Twitter):

![image](https://i.imgur.com/5bVkDLq.jpg)

See the user flow [in this Figma board](https://www.figma.com/file/HG3SMVhTwfLUeIU04UoXDg/better.kontext.app-bounty-user-feedback?node-id=0%3A1):
![user flow](https://i.imgur.com/8NzUKOh.png)

