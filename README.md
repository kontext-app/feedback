This is work in progress.

**We want to let anyone crowfund dApp features.**

1. A developer sets a funding goal for an issue,
2. Others fund it,
3. The dev builds the feature and collects the bounty.

Use a chrome extension to show funding progress directly in github issues (and collect feedback in the dApp, or on Twitter):

![image](https://i.imgur.com/5bVkDLq.jpg)

**Tech we need:**

- **a github action (python)**, turning github issues (like [https://github.com/seichris/issues-to-website/issues](https://github.com/seichris/issues-to-website/issues)) into a neat website (like [https://issues-to-website.vercel.app/](https://issues-to-website.vercel.app/))
- an escrow **smart contract**
- a service that watches the escrow contract
- **a chrome extension** that updates the funding UI on github / in the dApp UI / on Twitter (could also just be a gh PR message bot)

To do: https://github.com/seichris/issues-to-website/issues/18

See the user flow [in this Figma board](https://www.figma.com/file/HG3SMVhTwfLUeIU04UoXDg/better.kontext.app-bounty-user-feedback?node-id=0%3A1):
![user flow](https://i.imgur.com/8NzUKOh.png)
