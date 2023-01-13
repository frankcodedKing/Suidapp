__NUXT_JSONP__("/resources-move", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){return {data:[{pageContent:"\u003Cp\u003EMove is an open source language for writing safe smart contracts. It was originally developed at Facebook to power the \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fdiem\u002Fdiem\"\u003EDiem\u003C\u002Fa\u003E blockchain. However, Move was designed as a platform-agnostic language to enable common libraries, tooling, and developer communities across blockchains with vastly different data and execution models. \u003Ca href=\"https:\u002F\u002Fgithub.com\u002FMystenLabs\u002Fsui\u002Fblob\u002Fmain\u002FREADME.md\"\u003ESui\u003C\u002Fa\u003E, \u003Ca href=\"https:\u002F\u002Fgithub.com\u002FOLSF\u002Flibra\"\u003E0L\u003C\u002Fa\u003E, and \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fstarcoinorg\u002Fstarcoin\"\u003EStarcoin\u003C\u002Fa\u003E are using Move, and there are also plans to integrate the language in several upcoming and existing platforms (e.g., \u003Ca href=\"https:\u002F\u002Fwww.businesswire.com\u002Fnews\u002Fhome\u002F20210921006104\u002Fen\u002FCelo-Sets-Sights-On-Becoming-Fastest-EVM-Chain-Through-Collaboration-With-Mysten-Labs\"\u003ECelo\u003C\u002Fa\u003E).\u003C\u002Fp\u003E\u003Cp\u003EThe Move language documentation is available in the \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fmove-language\u002Fmove\"\u003EMove GitHub\u003C\u002Fa\u003E repository and includes a \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fmove-language\u002Fmove\u002Fblob\u002Fmain\u002Flanguage\u002Fdocumentation\u002Ftutorial\u002FREADME.md\"\u003Etutorial\u003C\u002Fa\u003E and a \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fmove-language\u002Fmove\u002Fblob\u002Fmain\u002Flanguage\u002Fdocumentation\u002Fbook\u002Fsrc\u002FSUMMARY.md\"\u003Ebook\u003C\u002Fa\u003E describing language features in detail. These are invaluable resources to deepen your understanding of the Move language but not strict prerequisites to following the Sui tutorial, which we strived to make self-contained. Further, Sui does differ in some ways from Move, which we explore here.\u003C\u002Fp\u003E\u003Cp\u003EIn Sui, Move is used to define, create and manage programmable Sui \u003Ca href=\"https:\u002F\u002Fdocs.sui.io\u002Fbuild\u002Fobjects?utm_source=blog&amp;utm_medium=website&amp;utm_campaign=evergreen\"\u003Eobjects\u003C\u002Fa\u003E representing user-level assets. Sui imposes additional restrictions on the code that can be written in Move, effectively using a subset of Move (a.k.a. \u003Ci\u003ESui Move\u003C\u002Fi\u003E), which makes certain parts of the original Move documentation not applicable to smart contract development in Sui.&nbsp;\u003C\u002Fp\u003E",posts:[{title:"Recap 8\u002F10 Move AMA: Move Programming Language with Mysten Engineers",link:"recap-sui-mysten-engineers",excerpt:"Move is an evolution of ideas that were present in the first generation of smart contract languages. So, it's similar to evolution in terms of thinking about safety and security that happened between C and even C++ languages that were developed and implemented. ",date:"2022-10-05",heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FMove_Programming_AMA_2_a3034611ac\u002FMove_Programming_AMA_2_a3034611ac.gif",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FMove_Programming_Language_AMA_5ff16269db\u002FMove_Programming_Language_AMA_5ff16269db.png",subroute:a,categoryName:d,catRoute:[b],catId:a,author:c},{title:"Recap 7\u002F28 Sui AMA: Move Programming Language",link:"recap-sui-ama-move-programming-language",excerpt:"Normally in a blockchain environment, all transactions are sort of ordered, even ones that aren't related. For example, Alice is sending a coin to Bob and says I am also sending some coins to Adam and Emma, those transactions aren't related but in a normal blockchain, you have to wait for all of them to go through consensus in the same order. It’s just kind of silly, so in Sui, we have this object model that lets us know if those operations are related or not so we can run them in parallel and in the original form of Move. To add on top of that, we also have different ownership models and different storage models that will also provide additional security over ownership. So, if you own something, no one can take it from you.",date:"2022-09-01",heroImage:e,image:e,subroute:a,categoryName:d,catRoute:[b],catId:a,author:c},{title:"Recap 7\u002F14 Sui AMA: Move Programming Language with Mysten Dev Team",link:"recap-sui-mysten-dev-team",excerpt:"I think what's unique about Move is that it brings interesting things (that have been done) from the world of smart contracts languages that are around other than Solidity. It also brings some very interesting concepts from more traditional programming languages. For example, the way the assets are encoded in Move is different than it has been traditionally done as far as I understand. Every time you create in Move, you essentially create an NFT with all the rich properties that you can modify. Move has been designed around this concept of being able to share code easily, which is why we integrated this concept of packages and modules. This allows you to write and publish source code somewhere that people kind of know what they're seeing on the chain, but then you don't have to copy and paste. There's this kind of notion of the language being both expressive enough, but also minimal enough that it helps with finding bugs and writing tools. ",date:"2022-08-29",heroImage:e,image:e,subroute:a,categoryName:d,catRoute:[b],catId:a,author:c},{title:"Meet the Sui Explorer",link:"meet-the-sui-explorer",excerpt:"Sui's emergence as a game-changing layer one amidst a burgeoning sea of pre-existing blockchains signal a new era of web3 infrastructure. This new era is made possible by Sui's mission to provide the infrastructure that will support the development of a wide range of applications, from dynamic games to secure DeFi protocols, all with unrivaled speed and incredibly low cost. \n\nAs part of Sui’s vision to create infrastructure to support the developers on-boarding the next billion users  to web3, we released the Sui Explorer to act as a trusted transparency tool for Sui users and builders.  Explorers are an essential part of any L1 platform, serving as inspection and analytics tools for users and developers to troubleshoot, confirm their activities and verify holdings on-chain.",date:"2022-08-25",heroImage:g,image:g,subroute:a,categoryName:h,catRoute:[i,f,b,j],catId:a,author:c},{title:"Full Node & Validator Selection Announcement",link:"full-node-and-validator-selection-announcement",excerpt:"The Sui community has come to life! We have received 28,000 validator applications from more than 80 countries. We could not be more excited to see this level of engagement! \n",date:"2022-08-24",heroImage:k,image:k,subroute:a,categoryName:h,catRoute:[i,f,b,j],catId:a,author:c},{title:"Recap 6\u002F30 Sui AMA: Move Programming Language with Sam Blackshear",link:"recap-sui-with-sam-blackshear",excerpt:"So, we actually don't use a custom variant of Move. The nature of Move is an interesting language. We've intentionally designed it as this cross platform language where there's a core language that isn't specific to any blockchain. It has things like strux, booleans, integers and addresses, but it doesn't have a notion of accounts, transactions, the cryptography that's used by a given platform, or the consensus that's used by a given platform – all these things are abstracted away.",date:"2022-07-27",heroImage:l,image:l,subroute:a,categoryName:d,catRoute:[b],catId:a,author:c},{title:"Why We Created Sui Move",link:"why-we-created-sui-move",excerpt:"Move is a cross-platform, embedded language. The core language itself is very simple: it has generic concepts like structs, integers, and addresses, but does not have blockchain-specific concepts like accounts, transactions, time, cryptography, etc. These features must be provided by the blockchain platform that integrates Move. Importantly, these blockchains do not need their own fork of Move—each platform uses the same Move VM, bytecode verifier, compiler, prover, package manager, and CLI, but adds blockchain-specific features via code that builds on top of these core components. ",date:"2022-07-12",heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FTwitter_post_12_61a41e329c\u002FTwitter_post_12_61a41e329c.png",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FTwitter_post_12_1_c20108ee19\u002FTwitter_post_12_1_c20108ee19.png",subroute:a,categoryName:d,catRoute:[b],catId:a,author:"Sam Blackshear"},{title:"Announcing Enhanced Move VSCode Plugin",link:"announcing-enhanced-move-vs-code-plugin",excerpt:"The VSCode plugin for Move is called move-analyzer and it is available in the Visual Studio Marketplace. The new features are supported via the Language Server Protocol; in order to unleash the full potential of the plugin, in addition to installing the plugin itself, you also need to install move-analyzer’s language server as described in installation instructions provided with the plugin distribution.",date:"2022-07-05",heroImage:m,image:m,subroute:a,categoryName:d,catRoute:[b],catId:a,author:c},{title:"Announcing Sui Tokenomics",link:"announcing-sui-tokenomics",excerpt:"Today, we are equally excited to share the design of Sui’s economics and incentives — also known as Sui’s tokenomics. In the same spirit of Sui’s engineering design, Sui’s economic model has been designed at the frontier of blockchain economic and incentives research. The overarching goal has been to implement an economic system aligning incentives across the various entities participating in the Sui ecosystem. The aim is for Sui’s financial plumbing to be at par with its engineering design so that our smart contracts platform delivers a flourishing economy with billions of participants.",date:"2022-05-24",heroImage:n,image:n,subroute:a,categoryName:"Tokenomics, Move",catRoute:[f,b],catId:a,author:c}],pageHeroImage:o,metaImage:o,excerpt:"Move is an open source language for writing safe smart contracts. It was originally developed at Facebook to power the Diem blockchain. However, Move was designed as a platform-agnostic language to enable common libraries, tooling, and developer communities across blockchains with vastly different data and execution models.",title:d}],fetch:{},mutations:[]}}(void 0,"resources-move","Mysten Labs","Move","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FMove_AMA_e5071cf7d1\u002FMove_AMA_e5071cf7d1.gif","resources-tokenomics","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSui_Explorer_f5c383be2f\u002FSui_Explorer_f5c383be2f.png","Narwhal & Tusk, Tokenomics, Move, Sui","resources-narwhal-tusk","resources-sui","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FValidator_Close_06640a57be\u002FValidator_Close_06640a57be.png","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002F063022_Move_AMA_8e10aebda2\u002F063022_Move_AMA_8e10aebda2.gif","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FEnhanced_VS_Code_8c11327fe8\u002FEnhanced_VS_Code_8c11327fe8.png","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSui_Tokenomics_8e646e8727\u002FSui_Tokenomics_8e646e8727.png","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FMove_Header_4a5dc9bb4b\u002FMove_Header_4a5dc9bb4b.png")));