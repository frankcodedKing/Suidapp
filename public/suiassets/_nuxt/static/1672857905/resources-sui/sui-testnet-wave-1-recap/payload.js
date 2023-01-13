__NUXT_JSONP__("/resources-sui/sui-testnet-wave-1-recap", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return {data:[{pageTitle:"Sui Testnet Wave 1 Recap",excerpt:"Sui Testnet Wave 1 came to an end on December 1, 2022 after a multi-week run. We successfully achieved our goal of practicing decentralized coordination and incident response on a geo-distributed Sui network with independent validators and node operators across eight time zones and 10 countries. We would like to express our utmost appreciation to the Sui Validators, operators, and users that made Wave 1 a success! ",pageContent:"\u003Cp\u003ESui Testnet Wave 1 \u003Ca href=\"https:\u002F\u002Fdiscord.com\u002Fchannels\u002F916379725201563759\u002F925109817834631189\u002F1048020746116550656\"\u003E\u003Cu\u003Ecame to an end\u003C\u002Fu\u003E\u003C\u002Fa\u003E on December 1, 2022 after a multi-week run. We successfully achieved our goal of practicing decentralized coordination and incident response on a geo-distributed Sui network with independent validators and node operators across eight time zones and 10 countries. We would like to express our utmost appreciation to the Sui Validators, operators, and users that made Wave 1 a success!\u003C\u002Fp\u003E\u003Ch4\u003EHighlights\u003C\u002Fh4\u003E\u003Cp\u003EHere is what we worked on during Wave 1:\u003C\u002Fp\u003E\u003Cp\u003E\u003Cstrong\u003EGenesis:\u003C\u002Fstrong\u003E Boot-strapping a decentralized network involves careful orchestration. With Wave 1 we successfully conducted a collaborative genesis ceremony with our validators to bring Sui online.\u003C\u002Fp\u003E\u003Cp\u003E\u003Cstrong\u003EMonitoring:\u003C\u002Fstrong\u003E Observing network health is necessary for maintaining the health of any multi-node network, but doubly so when disparate, geo-distributed operators own these nodes. In Wave 1 we set up global monitoring to observe consensus health, networking health, throughput, and resource usage.\u003C\u002Fp\u003E\u003Cp\u003E\u003Cstrong\u003ECommunication:\u003C\u002Fstrong\u003E Operators need a communication channel for coordinating the genesis ceremony, asking about changing metrics, sharing issues, and learning about software patches. In addition, we need a way to coordinate updates and restarts. During Wave 1, we tried a single Discord channel for communication and found that this simple approach met our needs fairly well.\u003C\u002Fp\u003E\u003Cp\u003E\u003Cstrong\u003EMitigation:\u003C\u002Fstrong\u003E Maintaining network health requires responding to events in a timely manner. Wave 1 let us practice processes to detect, diagnose, and mitigate network events involving issues such as disconnection, misconfiguration, documentation error, node sync and catch up, consensus reliability, machine resource consumption, and transaction traffic surges.\u003C\u002Fp\u003E\u003Cp\u003E\u003Cstrong\u003EUpdates:\u003C\u002Fstrong\u003E Maintaining a healthy network can require applying live updates and patches. Throughout Wave 1 we rolled out three different software updates to mitigate issues as they arose. All operators were able to update to the new version with no downtime or data loss.\u003C\u002Fp\u003E\u003Ch4\u003EUsage Stats\u003C\u002Fh4\u003E\u003Cp\u003ETotal transactions processed: ~22 million\u003Cbr\u003ETotal on-chain NFTs: ~11 million*\u003Cbr\u003ETotal packages published: ~2,600*\u003Cbr\u003ETotal coins dispensed by faucet: 251 billion \u003Ca href=\"https:\u002F\u002Fsui.io\u002Fresources-sui\u002Fannouncing-mist\u002F\"\u003E\u003Cu\u003EMIST\u003C\u002Fu\u003E\u003C\u002Fa\u003E\u003Cbr\u003ETotal requests served by Testnet faucet globally: 4.19 million\u003C\u002Fp\u003E\u003Cp\u003E*These numbers come from the \u003Ca href=\"https:\u002F\u002Fsuiscan.xyz\u002Fdevnet\u002Fhome\"\u003E\u003Cu\u003ESuiscan community project\u003C\u002Fu\u003E\u003C\u002Fa\u003E. Such community contributions are fundamental to the success of Sui and we would like to express our gratitude to the \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Fstaketab\u002Fstatus\u002F1598019713875210240?cxt=HHwWgMDT2dGdp60sAAAA\"\u003E\u003Cu\u003ESuiscan team\u003C\u002Fu\u003E\u003C\u002Fa\u003E! Thank you!\u003C\u002Fp\u003E\u003Ch4\u003EWave 1 Incidents and Fixes\u003C\u002Fh4\u003E\u003Cp\u003EA testnet with no operational incidents would be a missed opportunity for learning to debug and mitigate issues in a live environment. Testnet Wave 1 presented its share of challenges for our operators, but fortunately we were able to understand these issues, fix them, and improve Sui (in many cases via improvements rolled out during a Wave 1 update).\u003C\u002Fp\u003E\u003Cp\u003EHere are three memorable incidents:\u003C\u002Fp\u003E\u003Cul\u003E\u003Cli\u003EWe addressed one consensus stall scenario where we saw validators gradually losing consensus liveness, which eventually led to a point where the network could not achieve quorum. Our multi-day debugging revealed that, during the \u003Ca href=\"https:\u002F\u002Fdl.acm.org\u002Fdoi\u002F10.1145\u002F3492321.3519594\"\u003E\u003Cu\u003ENarwhal\u003C\u002Fu\u003E\u003C\u002Fa\u003E Byzantine broadcast, there was an edge case where a node may wait for the return of a request that was deduped and never sent out, leading to a livelock. Our team was able to roll out a fix for this edge case and gradually restore all the stalled validators to regain quorum. &nbsp;(This incident took place several days prior to opening up Testnet to the public on November 17, and we subsequently opted to launch a new network due to other technical reasons.)\u003C\u002Fli\u003E\u003Cli\u003EWe addressed a scenario where newly restarted validators failed to rejoin and catch up to the latest state of consensus. Our team identified an edge case where the Narwhal consensus round number was incorrectly set to zero upon a restart instead of the correct consensus round number, leading to excessively slow requests that resulted in timeouts. We were able to patch this case, update lagging validators, and help them catch up while the network was live and operational.\u003C\u002Fli\u003E\u003Cli\u003ELast but not least, thanks to Wave 1 activities we were able to determine the root cause of a long-standing networking issue that contributed significantly to memory leakage. While we did not get a chance to apply and test this fix during Wave 1, the fix is now available in our upstream repository and will soon make its way to Devnet and Wave 2.\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cp\u003EMysten Labs' engineers worked tirelessly throughout Wave 1, and we will continue bringing our best efforts to test the Sui network during subsequent waves to ensure stable operation at Mainnet.\u003C\u002Fp\u003E\u003Ch4\u003ENext Step, Wave 2\u003C\u002Fh4\u003E\u003Cp\u003EWith Testnet Wave 1 the Sui community took its first step on the journey of building a healthy and vibrant network. This effort paved the way for Wave 2, which will focus on epoch management, tokenomics, and stake delegation. We expect to launch this next Testnet Wave in early 2023.\u003C\u002Fp\u003E\u003Cp\u003EThe Sui community of validators and node operators made Testnet Wave 1 a tremendous success. We look forward to growing and refining the Sui infrastructure with yet another highly collaborative Wave 2 along with our community!\u003Cbr\u003E&nbsp;\u003C\u002Fp\u003E",pageHeroImage:f,metaImage:f,pageUrl:a,catName:c,date:"2022-12-05",catSlug:b,author:d,posts:[{title:"Wishing You a Capy Holidays",link:"wishing-you-a-capy-holidays",excerpt:"#CapyHolidays! For the next two weeks, the Sui community can obtain limited-release Gift Boxes, each containing unique, event-specific attributes, accessories, and backgrounds to add some holiday excitement for Capys and share the joy of gifting. With this release, Sui Capys demonstrate mechanisms such as restricted transfers, unlockable game features, dynamic fields, and event-specific capabilities.\n",date:g,heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FCapy_Holidays_39ee7629b2\u002FCapy_Holidays_39ee7629b2.svg",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FCapy_Holidays_TN_4297429934\u002FCapy_Holidays_TN_4297429934.svg",categoryName:c,catRoute:[b],catId:a,author:d},{title:"SUI Token Community Access Program: FAQ",link:"sui-token-community-access-program-faq",excerpt:"Answers to the frequently asked questions about the SUI Token Community Access Program.",date:g,heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSUI_Cap_FAQ_ab96c93b8b\u002FSUI_Cap_FAQ_ab96c93b8b.png",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSUI_Cap_FAQ_TN_606c93355d\u002FSUI_Cap_FAQ_TN_606c93355d.png",categoryName:c,catRoute:[b],catId:a,author:e},{title:"Announcing the 2023 Sui Builder House World Tour",link:"2023-sui-builder-house-world-tour",excerpt:"Get ready for an exciting year of Sui Builder Houses around the world! You’ll want to save the dates and register early for our Builder Houses in places like Denver, Tokyo, Paris, and Singapore. ",date:"2022-12-15",heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FAnnouncing_2023_Sui_Builder_House_World_Tour_1_960cb701a7\u002FAnnouncing_2023_Sui_Builder_House_World_Tour_1_960cb701a7.svg",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FAnnouncing_2023_Sui_Builder_House_World_Tour_TN_1_f2bc399649\u002FAnnouncing_2023_Sui_Builder_House_World_Tour_TN_1_f2bc399649.svg",categoryName:c,catRoute:[b],catId:a,author:e},{title:"SUI Token Allocation",link:"sui-token-allocation",excerpt:"Sui’s tokenomics have been designed to work hand-in-hand with Sui’s novel data model, object-centric architecture, and consensus algorithm. Sui’s Proof-of-Stake system ensures everyone can participate in network operations either directly through running a validator or indirectly through stake delegation. Sui’s Gas Price Mechanism delivers a competitive economic setting where blockspace is no longer priced as a luxury good but as a commodity for everyone to enjoy. Sui’s Storage Fund prices storage accurately so that Sui applications can leverage Sui’s ability to store data on-chain while keeping the network’s tokenomics healthy.",date:"2022-12-14",heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSUI_Token_Allocation_Found_359e539960\u002FSUI_Token_Allocation_Found_359e539960.png",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSUI_Token_Allocation_Found_TN_adcc8bd4f8\u002FSUI_Token_Allocation_Found_TN_adcc8bd4f8.png",categoryName:"Tokenomics, Sui",catRoute:["resources-tokenomics",b],catId:a,author:e},{title:"SUI Token Community Access Program",link:"community-access-program",excerpt:"Broad sets of Sui builders want and need to own the SUI token to be able to participate in on-chain activity at mainnet launch and beyond. The Sui Foundation is thus designing the Community Access Program to enable Sui community members to access SUI tokens in the early phases of the network's lifespan. \n\nDecentralization and community-building are core elements in the Sui Foundation’s mission to promote, grow, and cultivate the holistic development of the Sui ecosystem. By ensuring a broad allocation of SUI tokens across Sui community members, the Community Access Program will hasten decentralization and diversify participants. ",date:"2022-12-07",heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSui_Access_Program_1e1d58029d\u002FSui_Access_Program_1e1d58029d.png",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSui_Access_Program_TN_1f1c81c059\u002FSui_Access_Program_TN_1f1c81c059.png",categoryName:c,catRoute:[b],catId:a,author:e},{title:"Supporting Decentralization and the Sui Community",link:"sui-delegation-program",excerpt:"The SUI Delegation Program will enable community members seeking to run a validator to apply for delegated SUI tokens from the Sui Foundation to bootstrap their validator operations. The Sui Foundation believes this program is a critical step in its mission towards decentralization and supporting the participation of Sui community members in Sui’s operations.",date:"2022-11-30",heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSui_Delegation_Program_1_53874af51c\u002FSui_Delegation_Program_1_53874af51c.png",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSui_Delegation_Program_TN_2_1f433e0da6\u002FSui_Delegation_Program_TN_2_1f433e0da6.png",categoryName:c,catRoute:[b],catId:a,author:e},{title:"Sui Testnet Wave 1 Goes Live",link:"sui-testnet-wave-1-goes-live",excerpt:"We are thrilled to announce the start of Sui Testnet Wave 1, the first instance of a Sui Network with non-Mysten Labs operators, and an important step towards a decentralized Sui Mainnet. We conducted the genesis ceremony for the network on November 10, and we will keep the network running for approximately two weeks.",date:"2022-11-17",heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSui_Testnet_1_Live_TN_1_2c45f7e225\u002FSui_Testnet_1_Live_TN_1_2c45f7e225.png",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSui_Testnet_1_Live_TN_48d247a57b\u002FSui_Testnet_1_Live_TN_48d247a57b.png",categoryName:c,catRoute:[b],catId:a,author:d},{title:"Cryptography in Sui: Wallet Specifications",link:"cryptography-in-sui-wallet-specifications",excerpt:"Sui follows wallet specifications widely accepted in the cryptocurrency industry, such as BIP-32 (and its variation, SLIP-0010), BIP-44, and BIP-39. These specifications have become common in the cryptocurrency industry as a means for users to manage account keys.",date:"2022-11-08",heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002Fcrypto_wallet_specs_eb284c6dc2\u002Fcrypto_wallet_specs_eb284c6dc2.png",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002Fcrypto_wallet_specs_TN_ef4a73b33e\u002Fcrypto_wallet_specs_TN_ef4a73b33e.png",categoryName:c,catRoute:[b],catId:a,author:d},{title:"Cryptography in Sui",link:"cryptography-in-sui",excerpt:"As we launch Sui, we want to share our best practices on cryptography in Sui and why we support certain algorithms and primitives. Our philosophy applies to everything from user wallet key management to on-chain Move functions.",date:h,heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002Fintro_to_crypto_in_sui_801c6026f6\u002Fintro_to_crypto_in_sui_801c6026f6.png",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002Fintro_to_crypto_in_sui_TN_f384477099\u002Fintro_to_crypto_in_sui_TN_f384477099.png",categoryName:c,catRoute:[b],catId:a,author:d},{title:"Building the Capy Prototype on Sui",link:"building-capy-prototype-on-sui",excerpt:"As programmable objects on the Sui blockchain, Capys demonstrate principles such as asset ownership, transferability, and dynamic object fields. They appear in a player’s wallet along with accessories, including hats, bicycles, and scarves.",date:h,heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FCapy_Blog_Header_f834f76685\u002FCapy_Blog_Header_f834f76685.png",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FCapy_Blog_Header_TN_9bd16b50dd\u002FCapy_Blog_Header_TN_9bd16b50dd.png",categoryName:c,catRoute:[b],catId:a,author:d},{title:"Introducing Sui Payment Transaction Types",link:"introducing-sui-payment-transaction-types",excerpt:"Our latest Sui release introduces three new native transaction types and deprecates three existing methods. The new APIs—Pay, PaySui, and PayAllSui—effectively replace TransferSui, SplitCoin, and MergeCoin.",date:"2022-11-02",heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSui_Payment_Transaction_Types_770630de61\u002FSui_Payment_Transaction_Types_770630de61.png",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSui_Payment_Transaction_Types_TN_9316377c17\u002FSui_Payment_Transaction_Types_TN_9316377c17.png",categoryName:c,catRoute:[b],catId:a,author:d},{title:"Introducing the Sui Foundation",link:"introducing-sui-foundation",excerpt:"The Sui Foundation promotes, grows, and cultivates the holistic development of the Sui ecosystem.",date:"2022-10-27",heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002Fintro_Sui_Found_6c8e9eb853\u002Fintro_Sui_Found_6c8e9eb853.png",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002Fintro_Sui_Found_TN_f904ef40df\u002Fintro_Sui_Found_TN_f904ef40df.png",categoryName:c,catRoute:[b],catId:a,author:e},{title:"Dynamic Fields Migration Guide",link:"dynamic-fields-migration-guide",excerpt:" Dynamic Fields allow Sui Move developers to extend their structs with new data, on-the-fly.",date:"2022-10-25",heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FAnnouncing_Mist_07f0cd353e\u002FAnnouncing_Mist_07f0cd353e.png",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FBLOG_1_c1246560b0\u002FBLOG_1_c1246560b0.png",categoryName:c,catRoute:[b],catId:a,author:d},{title:"One SUI Coin Will Soon Equal a Billion MIST",link:"announcing-mist",excerpt:"Announcing MIST, the smallest unit of a SUI Coin. This new SUI division allows greater flexibility for SUI transactions. This introduction means that a Coin\u003CSUI\u003E with value of 1 equals 1 MIST, and 1 MIST equals 10^-9 of a SUI. In other words, 1 SUI equals 1 billion MIST.",date:"2022-10-20",heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FIntroducing_Mist_7cfc8befa2\u002FIntroducing_Mist_7cfc8befa2.png",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FIntroducing_Mist_TNOG_e6615194ea\u002FIntroducing_Mist_TNOG_e6615194ea.png",categoryName:c,catRoute:[b],catId:a,author:d},{title:"Recap 9\u002F1 Sui AMA: Sui Explorer & Wallet",link:"recap-sui-ama-sui-explorer-and-wallet",excerpt:"One of the really neat things about us building out an explorer is that it ends up being a really great testing ground for us to look at our APIs and make sure that we have data that can meet our user's needs. We want to build an explorer, obviously, for people to explore blockchain, but also, we want others to be able to build explorers and wallets in the space. In the Explorer, there are some really neat features that we've been able to build out because of the unique pieces of our blockchain, particularly the Move bytecode display, which allows you to see the actual bytecode that was deployed as part of that package and then within that code, you can kind of jump to definitions between packages.",date:"2022-10-17",heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FAMA_Explorer_Wallet_cd01d44580\u002FAMA_Explorer_Wallet_cd01d44580.png",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FAMA_Explorer_Wallet_TN_97a1443b73\u002FAMA_Explorer_Wallet_TN_97a1443b73.png",categoryName:c,catRoute:[b],catId:a,author:d},{title:"Recap 8\u002F18 Sui AMA: Business Development & Partnerships with Jameel Khalfan",link:"recap-sui-ama-business-development-partnerships",excerpt:"In this AMA recap, hear from Jameel Khalfan, Head of Consumer Partnerships at Mysten Labs, on all things partnerships and business development.",date:"2022-10-12",heroImage:i,image:i,categoryName:c,catRoute:[b],catId:a,author:d},{title:"Sui Wallet Updates and Related Tools",link:"sui-wallet-updates",excerpt:"Today, we’re excited to announce updates for Sui Wallet. In addition to a refreshed look, you’ll find several refined features that will improve how you use and interact with the wallet.\n\nTwo months ago, we introduced Sui Wallet, an open -source Chrome extension self-custody wallet that acts as your portal to web3. ",date:"2022-09-26",heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSui_Wallet_Updates_49dcbf195a\u002FSui_Wallet_Updates_49dcbf195a.png",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSui_Wallet_Updates_Small_731baafed0\u002FSui_Wallet_Updates_Small_731baafed0.png",categoryName:c,catRoute:[b],catId:a,author:d},{title:"Mysten Labs Series B Raise",link:"raise-announcement",excerpt:"Mysten Labs (“Mysten” or the “Company”), a web3 infrastructure company and developer of the Sui Layer 1 blockchain, today announced the initial close of its $300 million Series B funding round. This new capital values the Company at more than $2 billion. The Company intends to use the proceeds from the round to continue building out the core infrastructure to power web3’s next wave of applications and accelerate the adoption of the Sui ecosystem. ",date:"2022-09-08",heroImage:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSeries_B_Raise_7a7cb2a901\u002FSeries_B_Raise_7a7cb2a901.png",image:"https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSeries_Raise_Thumb_78b07851bf\u002FSeries_Raise_Thumb_78b07851bf.png",categoryName:c,catRoute:[b],catId:a,author:"Evan Cheng"},{title:"Recap 8\u002F3 Sui AMA: Technical Writing with Randall & Clay",link:"recap-sui-ama-technical-writing",excerpt:"Exactly. What Randall and I do is work on the internal docs, just like we do with the external docs. A lot of tech writing groups will cordon things off and choose either internal or external docs. But we are dedicated to doing both and that's how we scale. We make it as easy as possible for people to do the right things for themselves, their careers, their users most importantly, and the product itself. We do this by supplying processes, templates, and guidance, as well as direct help writing the materials ourselves. Whatever is needed. ",date:"2022-09-06",heroImage:j,image:j,categoryName:c,catRoute:[b],catId:a,author:d},{title:"Recap 7\u002F21 Sui AMA: Unlocking Opportunities on Sui with Adeniyi Abiodun",link:"recap-sui-ama-adeniyi-abiodun",excerpt:"It's a real battle-tested platform that has people beating the hell out of it through the process of figuring out bugs. Testing out the capacity of the platform, making sure it can handle the load, and making sure the storage and everything else scales will be all part of the incentivized Testnet. There'll be multiple ways for these internal devices to make sure that each one of them targets particular characteristics of the Sui platform and to make sure that by the time we go to Mainnet, it's been battle-tested. People will be able to really build the apps that we've promised that they can build and we feel really confident about that. The community is engaged with the team who's really passionate about building really scalable and well-engineered platforms for the masses. So that is something we want to do with the community, and we think all of you are going to be really useful in helping us validate some of the claims that we've made, and making sure that the Sui platform can be something for everybody.",date:"2022-08-30",heroImage:k,image:k,categoryName:c,catRoute:[b],catId:a,author:d},{title:"Recap 7\u002F7 Sui AMA: Gaming with Koh Kim",link:"recap-sui-ama-gaming",excerpt:"Sui assets are now modeled as objects where attributes can be defined, or the objects can be combined into new objects. In a game, you can have a sword that gathers experience points to increase levels where the points and levels are defined as attributes. You can also combine different items like a sword and jewel to make a new sword. All of this can be recorded on-chain. Outside the game, it has implications for the distribution, payments, and marketing as these activities always have intermediary platforms taking a cut of the revenue. ",date:"2022-08-26",heroImage:l,image:l,categoryName:c,catRoute:[b],catId:a,author:d},{title:"Meet the Sui Explorer",link:"meet-the-sui-explorer",excerpt:"Sui's emergence as a game-changing layer one amidst a burgeoning sea of pre-existing blockchains signal a new era of web3 infrastructure. This new era is made possible by Sui's mission to provide the infrastructure that will support the development of a wide range of applications, from dynamic games to secure DeFi protocols, all with unrivaled speed and incredibly low cost. \n\nAs part of Sui’s vision to create infrastructure to support the developers on-boarding the next billion users  to web3, we released the Sui Explorer to act as a trusted transparency tool for Sui users and builders.  Explorers are an essential part of any L1 platform, serving as inspection and analytics tools for users and developers to troubleshoot, confirm their activities and verify holdings on-chain.",date:"2022-08-25",heroImage:m,image:m,categoryName:c,catRoute:[b],catId:a,author:d},{title:"Full Node & Validator Selection Announcement",link:"full-node-and-validator-selection-announcement",excerpt:"The Sui community has come to life! We have received 28,000 validator applications from more than 80 countries. We could not be more excited to see this level of engagement! \n",date:"2022-08-24",heroImage:n,image:n,categoryName:c,catRoute:[b],catId:a,author:d},{title:"Validator Registration Open",link:"validator-registration-open",excerpt:"Earlier in June, we announced Sui Incentivized Testnet. We're happy to share that registration to participate in Sui Incentivized Testnet is now open! If you are a validator, developer or Sui Enthusiast, we highly encourage you to apply and join our incentivized testnet journey.",date:"2022-08-02",heroImage:o,image:o,categoryName:c,catRoute:[b],catId:a,author:d},{title:"Announcing Sui Wallet",link:"introducing-sui-wallet",excerpt:"The open-sourced Sui Wallet gives Sui users the ability to create an address, view and manage assets on the Sui network, and interact with dApps. The Sui Wallet serves as a reference implementation for other potential wallets and applications in the Sui ecosystem. To that end it will showcase the latest and most unique Sui capabilities. We believe the Sui Wallet repo will act as an important ecosystem enablement tool as Sui starts to support at scale use cases, Move-powered ownership models, and other features unique to Sui.",date:"2022-07-15",heroImage:p,image:p,categoryName:c,catRoute:[b],catId:a,author:"Bauer Wann"},{title:"Announcing Sui Incentivized Testnet",link:"announcing-sui-incentivized-testnet",excerpt:"Sui’s Testnet will steadily progress from the first multi-entity Sui network toward a decentralized mainnet operated by an evolving set of independent and distributed validators. The Testnet will gradually introduce and stress-test the key features, mechanisms required for a decentralized, production-ready Sui network. The Testnet aims to validate our designs, test our validator, full node, wallet, and developer toolchains, and build operational experience with a cohesive group of high-quality operators. We will graduate from Testnet to mainnet when we are fully confident in the security and performance of our software, have seen sustained operational excellence from our initial validators, and validate our developer experience via compelling Move-powered applications deployed on Testnet.",date:"2022-06-30",heroImage:q,image:q,categoryName:c,catRoute:[b],catId:a,author:d},{title:"Announcing Sui Fullnode",link:"announcing-sui-fullnode",excerpt:"Mysten Labs welcomes you to run your own Sui fullnode on DevNet. This is another step forward in providing robust services to developers and businesses to #buildonsui.",date:"2022-06-15",heroImage:r,image:r,categoryName:c,catRoute:[b],catId:a,author:d},{title:"Recap 6\u002F9 Sui AMA: Cryptography with Kostas Chalkias",link:"recap-sui-ama-cryptography",excerpt:"First, we have one of the fastest consensus algorithms and mempool; it’s Narwhal & Tusk. And second, there are some applications that can completely avoid full consensus and bypass it. For example, you can check out what we call Single Writer Friendly (SWF) applications. We have this different model of like ownership and certain objects, and the way you can combine it. Some of the assets can move from one place to the other, from one consensus to another method. And this is what makes a huge difference on our blockchain Sui.",date:"2022-06-14",heroImage:s,image:s,categoryName:c,catRoute:[b],catId:a,author:d},{title:"Sui DevNet Public Release",link:"sui-dev-net-public-release",excerpt:"Mysten Labs is pleased to announce the release of public Sui DevNet! This is the first of several Sui test networks we will launch and a big step in offering robust services to developers and businesses.",date:"2022-05-05",heroImage:t,image:t,categoryName:c,catRoute:[b],catId:a,author:d},{title:"Sui Dynamic NFTs to Enhance Gameplay",link:"sui-dynamic-nf-ts-to-enhance-gameplay",excerpt:"With Sui, we believe game developers should not be limited by the platform performance or fees, and they should be able to create whatever experience they imagine. Importantly, developing great games should not require game developers to also be experts in writing smart contracts. Rather they should focus on what they are good at, building cool games for gamers.",date:"2022-03-22",heroImage:u,image:u,categoryName:c,catRoute:[b],catId:a,author:d}]}],fetch:{},mutations:[]}}(void 0,"resources-sui","Sui","Mysten Labs","Sui Foundation","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSui_Testnet_Wave_1_Recap_f43b356119\u002FSui_Testnet_Wave_1_Recap_f43b356119.png","2022-12-19","2022-11-03","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002F081822_Business_4ab2670771\u002F081822_Business_4ab2670771.png","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002F080322_Technical_Writing_AMA_163f957aaa\u002F080322_Technical_Writing_AMA_163f957aaa.gif","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FAdeniyi_AMA_0c41c2b876\u002FAdeniyi_AMA_0c41c2b876.gif","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002F070722_AMA_Koh_1_8046ec52a3\u002F070722_AMA_Koh_1_8046ec52a3.gif","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSui_Explorer_f5c383be2f\u002FSui_Explorer_f5c383be2f.png","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FValidator_Close_06640a57be\u002FValidator_Close_06640a57be.png","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FTwitter_post_16_54b48a4f3f\u002FTwitter_post_16_54b48a4f3f.png","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FTwitter_post_13_1_498ef1cac2\u002FTwitter_post_13_1_498ef1cac2.png","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002Fsui_incentivized_testnet_5a4c8e57fb\u002Fsui_incentivized_testnet_5a4c8e57fb.png","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002Fannouncing_sui_fullnode_737e3a38be\u002Fannouncing_sui_fullnode_737e3a38be.png","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSUI_Update_f7710094aa\u002FSUI_Update_f7710094aa.gif","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002FSui_Dev_Net_42f85c7968\u002FSui_Dev_Net_42f85c7968.png","https:\u002F\u002Fstorage.googleapis.com\u002Fsui-cms-content\u002Fsui_monstars_5e9c26a940\u002Fsui_monstars_5e9c26a940.png")));