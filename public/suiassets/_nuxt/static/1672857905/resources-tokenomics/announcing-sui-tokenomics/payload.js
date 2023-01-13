__NUXT_JSONP__("/resources-tokenomics/announcing-sui-tokenomics", (function(a,b,c,d,e,f,g,h,i,j,k,l){return {data:[{pageTitle:"Announcing Sui Tokenomics",excerpt:"Today, we are equally excited to share the design of Sui’s economics and incentives — also known as Sui’s tokenomics. In the same spirit of Sui’s engineering design, Sui’s economic model has been designed at the frontier of blockchain economic and incentives research. The overarching goal has been to implement an economic system aligning incentives across the various entities participating in the Sui ecosystem. The aim is for Sui’s financial plumbing to be at par with its engineering design so that our smart contracts platform delivers a flourishing economy with billions of participants.",pageContent:"\u003Cp\u003EEarlier this year, we publicly shared our excitement with you and \u003Ca href=\"https:\u002F\u002Fmedium.com\u002Fmysten-labs\u002Fannouncing-sui-1f339fa0af08\"\u003E\u003Cu\u003Eannounced Sui\u003C\u002Fu\u003E\u003C\u002Fa\u003E to the world.\u003C\u002Fp\u003E\u003Cp style=\"margin-left:0px;\"\u003EThe Sui Smart Contracts Platform is an environmentally-friendly, cost-efficient, high-throughput and low-latency permissionless blockchain. We believe Sui’s capabilities are beyond the frontier of existing blockchain systems. Its cutting-edge performance is enabled by major advancements in the fields of distributed systems, cryptography and programming languages. This achievement augurs the genesis of a platform that can meet the Herculean requirements needed to serve billions of users across a wide range of web3 applications.\u003C\u002Fp\u003E\u003Cp style=\"margin-left:0px;\"\u003E\u003Cstrong\u003EToday, we are equally excited to share the design of \u003C\u002Fstrong\u003E\u003Ca href=\"https:\u002F\u002Fsui.io\u002Ftokenomics\"\u003E\u003Cstrong\u003E\u003Cu\u003ESui’s economics and incentives\u003C\u002Fu\u003E\u003C\u002Fstrong\u003E\u003C\u002Fa\u003E\u003Cstrong\u003E — also known as Sui’s tokenomics.\u003C\u002Fstrong\u003E In the same spirit of Sui’s engineering design, Sui’s economic model has been designed at the frontier of blockchain economic and incentives research. The overarching goal has been to implement an economic system aligning incentives across the various entities participating in the Sui ecosystem. The aim is for Sui’s financial plumbing to be at par with its engineering design so that our smart contracts platform delivers a flourishing economy with billions of participants.\u003C\u002Fp\u003E\u003Cp style=\"margin-left:0px;\"\u003EOur immediate goal is to obtain feedback from you (yes \u003Ci\u003Eyou\u003C\u002Fi\u003E), Sui’s community, to make sure that everyone’s input is part of Sui’s tokenomics and everyone can thrive in Sui’s economy. We’ve created three sets of material with varying degrees of accessibility. This blogpost proceeds with a high-level overview of Sui’s economic model, while \u003Ca href=\"https:\u002F\u002Fdocs.sui.io\u002Flearn\u002Ftokenomics?utm_source=medium&amp;utm_medium=blog&amp;utm_campaign=tokenomics\"\u003E\u003Cu\u003ESui’s documentation\u003C\u002Fu\u003E\u003C\u002Fa\u003E contains a more detailed description. For an even deeper dive, we recommend reading the \u003Ca href=\"https:\u002F\u002Fsui.io\u002Ftokenomics\"\u003E\u003Cu\u003ESui Tokenomics White Paper\u003C\u002Fu\u003E\u003C\u002Fa\u003E, which contains a complete formal and mathematical specification of Sui’s tokenomics.\u003C\u002Fp\u003E\u003Ch3 style=\"margin-left:0px;\"\u003E\u003Cstrong\u003ESui’s Economy\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\u003Cp style=\"margin-left:0px;\"\u003EThe Sui economy is characterized by three main sets of participants:\u003C\u002Fp\u003E\u003Cul\u003E\u003Cli\u003E\u003Cstrong\u003EUsers\u003C\u002Fstrong\u003E submit transactions to the Sui platform in order to create, mutate, and transfer digital assets or interact with more sophisticated applications enabled by smart contracts, interoperability, and composability.\u003C\u002Fli\u003E\u003Cli\u003E\u003Cstrong\u003ESUI token holders\u003C\u002Fstrong\u003E bear the option of delegating their tokens to validators and participating in the proof-of-stake mechanism. SUI owners also hold the rights to participate in Sui’s governance.\u003C\u002Fli\u003E\u003Cli\u003E\u003Cstrong\u003EValidators\u003C\u002Fstrong\u003E manage transaction processing and execution on the Sui platform.\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cp style=\"margin-left:0px;\"\u003EThe Sui economy has five core components:\u003C\u002Fp\u003E\u003Cul\u003E\u003Cli\u003E\u003Cstrong\u003EThe SUI token\u003C\u002Fstrong\u003E is the Sui platform’s native asset.\u003C\u002Fli\u003E\u003Cli\u003E\u003Cstrong\u003EGas fees \u003C\u002Fstrong\u003Eare charged on all network operations and used to reward participants of the proof-of-stake mechanism and prevent spam and denial-of-service attacks.\u003C\u002Fli\u003E\u003Cli\u003E\u003Cstrong\u003ESui’s storage fund\u003C\u002Fstrong\u003E is used to shift stake rewards across time and compensate future validators for storage costs of previously stored on-chain data.\u003C\u002Fli\u003E\u003Cli\u003E\u003Cstrong\u003EThe proof-of-stake mechanism\u003C\u002Fstrong\u003E is used to select, incentivize, and reward honest behavior by the Sui platform’s operators — i.e. validators and the SUI delegators.\u003C\u002Fli\u003E\u003Cli\u003E\u003Cstrong\u003EOn-chain voting\u003C\u002Fstrong\u003E is used for governance and protocol upgrades.\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cp style=\"margin-left:0px;\"\u003EWe now describe each element in further detail. Throughout, we use the visual representation in the following figure to aid the discussion.\u003C\u002Fp\u003E\u003Cp style=\"margin-left:auto;text-align:center;\"\u003E\u003Cimg src=\"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002Fsui_economic_model_72a76d8316\u002Fsui_economic_model_72a76d8316.png\" alt=\"sui-economic-model.png\"\u003E\u003Ci\u003ESui’s Economic Model\u003C\u002Fi\u003E\u003C\u002Fp\u003E\u003Ch3 style=\"margin-left:0px;\"\u003E\u003Cstrong\u003EI. The SUI Token\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\u003Cp style=\"margin-left:0px;\"\u003ESui’s native asset is called SUI and we generally use the capitalized version of SUI to distinguish the token from the Sui platform. The total supply of SUI is capped at 10,000,000,000 (i.e. ten billion tokens). A share of SUI’s total supply will be liquid at mainnet launch, with the remaining tokens vesting over the coming years or distributed as future stake reward subsidies. Each SUI token is divisible up to a large number of decimal places.\u003C\u002Fp\u003E\u003Cp style=\"margin-left:0px;\"\u003EThe SUI token serves four purposes. It can be staked in order to participate in the proof-of stake mechanism. It is the asset denomination required for paying gas fees in order to execute transactions and other operations. It is a versatile and liquid asset underpinning the whole Sui economy. It plays an important governance role by acting as a right to participate in on-chain voting.\u003C\u002Fp\u003E\u003Ch3 style=\"margin-left:0px;\"\u003E\u003Cstrong\u003EII. Sui’s Gas Pricing Mechanism\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\u003Cp style=\"margin-left:0px;\"\u003ESui’s gas pricing mechanism achieves the triple outcomes of delivering users with low, predictable transaction fees, of incentivizing validators to optimize their transaction processing operations, and of preventing spam and denial of service attacks.\u003C\u002Fp\u003E\u003Cp style=\"margin-left:0px;\"\u003ESui’s gas pricing mechanism delivers good user experience to Sui users, who can focus on using the Sui network without worrying about having to forecast the current market price of gas fees. Since validators agree on a network-wide reference price at the start of each epoch, Sui users use the reference price as a credible anchor when submitting their transactions. Moreover, the price setting mechanism is designed to reward good validator behavior; aligning incentives between SUI token holders, the network’s operators (i.e. the validators), and its users.\u003C\u002Fp\u003E\u003Cp style=\"margin-left:0px;\"\u003EA unique feature of Sui’s gas mechanism is that Sui users pay separate fees for execution and storage. Execution or, computation, gas prices are determined through a three-step process operating repeatedly across Sui epochs (time is divided into consecutive periods lasting roughly 24 hours each):\u003C\u002Fp\u003E\u003Col\u003E\u003Cli\u003EA gas price survey asks validators to submit reservation prices at the epoch start — that is, the minimum gas price at which they are willing to process transactions. The protocol sets the 2\u002F3’s percentile by stake as the epoch’s reference gas price.\u003C\u002Fli\u003E\u003Cli\u003EAs the epoch progresses with users submitting transactions and validators processing them, validators obtain signals over the operations of other validators.\u003C\u002Fli\u003E\u003Cli\u003EAt the epoch close, each validator submits their (subjective) beliefs over every other validator’s behavior and this information is used as an input into the stake reward distribution rule. Validators who submitted low price quotes during the gas survey — namely, lower than the reference price — or who processed all transactions above their self-declared reservation price promptly get boosted rewards. Contrarily, validators who submit high price quotes during the gas survey or who do not honor their self-declared reservation price get penalized with discounted rewards.\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003Cp style=\"margin-left:0px;\"\u003EThe gas pricing mechanism is designed so that validators are incentivized to both elicit their true reservation gas price and to honor such prices. Consequently, Sui users can expect transactions submitted with gas prices close to or at the reference price to be processed promptly. Moreover, since Sui incentivizes validators to set low prices, Sui’s gas price mechanism creates a healthy competition for fair prices: Validators are incentivized to set low gas prices but not too low — lest they be penalized for failing to honor such prices.\u003C\u002Fp\u003E\u003Cp style=\"margin-left:0px;\"\u003EStorage prices, in contrast, are set exogenously through governance proposals with the goal of targeting the off-chain dollar cost of data storage. In the long run, as the costs of storage fall due to technological improvements and the dollar price of the SUI token evolves, governance proposals will update the storage price in order to reflect the new dollar target price.\u003C\u002Fp\u003E\u003Cp style=\"margin-left:0px;\"\u003EOverall, Sui’s gas pricing mechanism bestows Sui users with an important monitoring role. Since users want transactions to be processed as quickly and efficiently as possibly, user clients such as wallets encourage this behavior by prioritizing communication with the most responsive validators. Such efficient operations are compensated with boosted rewards relative to less responsive validators. Furthermore, SUI token delegators receive the same boosted or penalized rewards as their delegate validator. An unresponsive validator is thus doubly exposed to the gas pricing mechanism: they lose directly through slashed rewards and indirectly through reduced delegated stake in future epochs as stakers move their tokens to more responsive validators.\u003C\u002Fp\u003E\u003Ch3 style=\"margin-left:0px;\"\u003E\u003Cstrong\u003EIII. Sui’s Storage Fund\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\u003Cp style=\"margin-left:0px;\"\u003ESui also includes an efficient and sustainable economic mechanism for funding data storage. Beyond Sui’s high throughput and low latency, a key Sui feature is its ability to handle arbitrary amounts of on-chain data. Financially, this feature introduces a severe intertemporal challenge: Validators who process and write data into storage today may differ from the future validators needing to store that data. If users were to pay only the fees for computation power at write, effectively, future users would need to subsidize past users for their storage and pay disproportionately high fees. This negative network externality can become highly taxing for Sui in the long-run if left unaddressed.\u003C\u002Fp\u003E\u003Cp style=\"margin-left:0px;\"\u003ESui’s economic design includes a storage fund that redistributes past transaction fees to future validators. In a nutshell, users pay fees upfront for both computation and storage. The storage fees are deposited into a storage fund used to adjust the future share of stake rewards distributed to validators relative to SUI delegators. When on-chain storage requirements are high, validators receive substantial additional rewards in order to compensate for their costs. Vice versa when storage requirements are low.\u003C\u002Fp\u003E\u003Cp style=\"margin-left:0px;\"\u003EImportantly, the storage fund never distributes rewards directly out of its principal. Rather, the storage fund is counted as part of total stake and its relative size is used, subsequently, to adjust the share of stake rewards distributed to Sui validators. This design ensures the storage fund is never at risk of depletion, thus making the storage fund an economic mechanism that is viable in the long-run and that can fund storage costs indefinitely.\u003C\u002Fp\u003E\u003Cp style=\"margin-left:0px;\"\u003EFinally, Sui’s storage model includes a “deletion option” by which users obtain a storage fee rebate whenever they delete previously stored on-chain data (e.g. an NFT’s metadata). This introduces a useful self-regulating throttle mechanism by which users delete data whenever storage no longer makes sense financially.\u003C\u002Fp\u003E\u003Ch3 style=\"margin-left:0px;\"\u003E\u003Cstrong\u003EIV. Sui’s Delegated PoS System\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\u003Cp style=\"margin-left:0px;\"\u003EThe Sui platform relies on delegated proof-of-stake to determine the set of validators who process transactions.\u003C\u002Fp\u003E\u003Cp style=\"margin-left:0px;\"\u003EWithin each epoch, operations are processed by a fixed set of validators, each with a specific amount of stake delegated from SUI token holders. Delegating SUI implies the SUI tokens are locked for the entire epoch and a receive a portion of the stake rewards at the epoch close. SUI token holders are free to unstake their SUI or to change their delegate validator when the epoch changes.\u003C\u002Fp\u003E\u003Cp style=\"margin-left:0px;\"\u003EA validator’s share of total stake is relevant in that it determines each validator’s share of voting power for processing transactions. Specifically, executing a Sui transaction requires processing by 2\u002F3’s of the validators by stake. Remember, however, that \u003Ca href=\"https:\u002F\u002Fdocs.sui.io\u002Flearn\u002Fabout-sui\"\u003E\u003Cu\u003ESui’s object-centric design\u003C\u002Fu\u003E\u003C\u002Fa\u003E lets validators execute transactions using a \u003Ca href=\"https:\u002F\u002Fdocs.sui.io\u002Flearn\u002Fsui-glossary#causal-order\"\u003E\u003Cu\u003Ecausal-ordering\u003C\u002Fu\u003E\u003C\u002Fa\u003E approach. Loosely speaking, if the objects in two transactions are fully independent, then it matters not which transaction is processed first. This design is remarkably powerful because it lets Sui parallelize transaction processing of non-shared objects. Hence, each validator can scale itself horizontally and increase its transaction throughput by adding more computing power. This delivers highly efficient unit economics in that both throughput and costs scale linearly with network activity on independent data. Sui’s “multi-lane” design contrasts markedly with traditional blockchain designs relying on \u003Ca href=\"https:\u002F\u002Fdocs.sui.io\u002Flearn\u002Fsui-glossary#total-order\"\u003E\u003Cu\u003Etotal-ordering\u003C\u002Fu\u003E\u003C\u002Fa\u003E — where every single transaction is ordered relative to each other, even fully independent transactions.\u003C\u002Fp\u003E\u003Cp style=\"margin-left:0px;\"\u003EStake rewards are distributed at the end of each epoch, once validators have reached agreement over the full set of transactions processed throughout the epoch. Importantly, since the storage fund is taken into account in the calculation of the epoch’s total stake, validators receive more stake rewards relative to SUI delegators whenever Sui’s on-chain data storage requirements are high.\u003C\u002Fp\u003E\u003Ch3 style=\"margin-left:0px;\"\u003E\u003Cstrong\u003EV. Sui Governance\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\u003Cp style=\"margin-left:0px;\"\u003EProtocol upgrades and other Sui governance changes are passed through on-chain voting proposals. The SUI token is useful in that it delivers token holders with the ability to participate in this process. Further details on Sui governance will be released over the upcoming weeks.\u003C\u002Fp\u003E\u003Ch3 style=\"margin-left:0px;\"\u003E\u003Cstrong\u003EFinal Thoughts\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\u003Cp style=\"margin-left:0px;\"\u003ESui’s economic model is tailored to operate smoothly in sync with Sui’s engineering design. In particular, Sui’s gas price mechanism and storage fund work hand-in-hand with Sui’s ability to parallelize transactions, scale horizontally, and store arbitrary amounts of on-chain data.\u003C\u002Fp\u003E\u003Cp style=\"margin-left:0px;\"\u003EWe look forward to receiving feedback on Sui’s tokenomics. The ultimate goal is to ensure Sui’s economic model can scale appropriately and serve web3’s next billion users. Engage with the community on \u003Ca href=\"https:\u002F\u002Fdiscord.gg\u002FGN3Vegetcr\"\u003E\u003Cu\u003ESui’s Tokenomics channel on Discord\u003C\u002Fu\u003E\u003C\u002Fa\u003E or submit your thoughts directly at: \u003Ca href=\"mailto:econ@mystenlabs.com\"\u003E\u003Cu\u003Eecon@mystenlabs.com\u003C\u002Fu\u003E\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\u003Ch3 style=\"margin-left:0px;\"\u003E\u003Cstrong\u003ELearn more about Sui\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\u003Cul\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fsui.io\u002Ftokenomics\"\u003E\u003Cu\u003ESui Tokenomics White Paper\u003C\u002Fu\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fdocs.sui.io\u002Flearn\u002Ftokenomics?utm_source=medium&amp;utm_medium=blog&amp;utm_campaign=tokenomics\"\u003E\u003Cu\u003ESui Tokenomics Developer Portal\u003C\u002Fu\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fdiscord.gg\u002Fsui\"\u003E\u003Cu\u003ECommunity forums\u003C\u002Fu\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Ch3 style=\"margin-left:0px;\"\u003E\u003Cstrong\u003EBuild with us!\u003C\u002Fstrong\u003E\u003C\u002Fh3\u003E\u003Cp style=\"margin-left:0px;\"\u003EWe are super excited about what the future unfolds and invite creators and builders to \u003Ca href=\"https:\u002F\u002Fdocs.sui.io\u002Fbuild?utm_source=medium&amp;utm_medium=social&amp;utm_campaign=tokenomics\"\u003E\u003Cu\u003Ejoin us\u003C\u002Fu\u003E\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E\u003Cp\u003E&nbsp;\u003C\u002Fp\u003E",pageHeroImage:e,metaImage:e,pageUrl:a,catName:f,date:"2022-05-24",catSlug:b,author:c,posts:[{title:"SUI Token Allocation",link:"sui-token-allocation",excerpt:"Sui’s tokenomics have been designed to work hand-in-hand with Sui’s novel data model, object-centric architecture, and consensus algorithm. Sui’s Proof-of-Stake system ensures everyone can participate in network operations either directly through running a validator or indirectly through stake delegation. Sui’s Gas Price Mechanism delivers a competitive economic setting where blockspace is no longer priced as a luxury good but as a commodity for everyone to enjoy. Sui’s Storage Fund prices storage accurately so that Sui applications can leverage Sui’s ability to store data on-chain while keeping the network’s tokenomics healthy.",date:"2022-12-14",heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSUI_Token_Allocation_Found_359e539960\u002FSUI_Token_Allocation_Found_359e539960.png",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSUI_Token_Allocation_Found_TN_adcc8bd4f8\u002FSUI_Token_Allocation_Found_TN_adcc8bd4f8.png",categoryName:"Tokenomics, Sui",catRoute:[b,d],catId:a,author:"Sui Foundation"},{title:"Meet the Sui Explorer",link:"meet-the-sui-explorer",excerpt:"Sui's emergence as a game-changing layer one amidst a burgeoning sea of pre-existing blockchains signal a new era of web3 infrastructure. This new era is made possible by Sui's mission to provide the infrastructure that will support the development of a wide range of applications, from dynamic games to secure DeFi protocols, all with unrivaled speed and incredibly low cost. \n\nAs part of Sui’s vision to create infrastructure to support the developers on-boarding the next billion users  to web3, we released the Sui Explorer to act as a trusted transparency tool for Sui users and builders.  Explorers are an essential part of any L1 platform, serving as inspection and analytics tools for users and developers to troubleshoot, confirm their activities and verify holdings on-chain.",date:"2022-08-25",heroImage:g,image:g,categoryName:h,catRoute:[i,b,j,d],catId:a,author:c},{title:"Full Node & Validator Selection Announcement",link:"full-node-and-validator-selection-announcement",excerpt:"The Sui community has come to life! We have received 28,000 validator applications from more than 80 countries. We could not be more excited to see this level of engagement! \n",date:"2022-08-24",heroImage:k,image:k,categoryName:h,catRoute:[i,b,j,d],catId:a,author:c},{title:"Recap 6\u002F23 Sui AMA: Tokenomics with Alonso de Gortari",link:"recap-sui-ama-tokenomics",excerpt:"In many ways, tokenomics is one of those parts of blockchain ecosystems that describe how different things work. It’s also a part of blockchains that are least developed, at least from a research point of view. So while it’s true that if you look at how different blockchains were in the engineering sense, especially regarding capabilities of L1s, if you look at it from building distributed systems, many of the engineering computer science models are available so you can figure out what you’re doing, what these networks are providing make sense or not. Tokenomics is not there at all if you look at the research, and you can even make very simple issues look not-so-simple, but things that should be well known like proof of work or proof of stake, the economics results are very behind.",date:"2022-07-19",heroImage:l,image:l,categoryName:f,catRoute:[b],catId:a,author:c}]}],fetch:{},mutations:[]}}(void 0,"resources-tokenomics","Mysten Labs","resources-sui","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSui_Tokenomics_8e646e8727\u002FSui_Tokenomics_8e646e8727.png","Tokenomics","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSui_Explorer_f5c383be2f\u002FSui_Explorer_f5c383be2f.png","Narwhal & Tusk, Tokenomics, Move, Sui","resources-narwhal-tusk","resources-move","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FValidator_Close_06640a57be\u002FValidator_Close_06640a57be.png","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002Fsui_suitokenomicsama_d57cdf2fc5\u002Fsui_suitokenomicsama_d57cdf2fc5.gif")));