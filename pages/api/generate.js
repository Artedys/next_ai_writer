import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `
Write me a detailed White Paper post with the title below.

Title:
`;

const generateAction = async (req, res) => {
	console.log(`API: ${basePromptPrefix}${req.body.userInput}`);

	const baseCompletion = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: `${basePromptPrefix}${req.body.userInput}\n`,
		temperature: 0.8,
		max_tokens: 250,
	});

	const basePromptOutput = baseCompletion.data.choices.pop();

	// I build Prompt #2.
	const secondPrompt = `
 Take the table of contents and title of the White Paper below and generate a precision White Paper written in the style of Paul Graham. Make it feel like a very accurate and precise story with the points hereafter. Don't just list the points. Go deep into each one. Explain why.

About ARTEDYS.
About ARTEDYX,
About CLIMATE-SAT.com,
About eSpatiale,
About Cristian BEZA,
About Omy SAHYE (she/her),

ARTEDYX is not 3D printing and nothing here is printing, neither 3D.
Please STOP with this text "Omy Sahye is an artist, entrepreneur and creative thinker from Johannesburg, South Africa who is a firm believer in the power of art to make a difference in people’s lives. Born in South Africa, Omy grew up surrounded by a diverse culture and landscapes which inspired his creative thinking and led him to pursue a career in art and design. In 2009, Omy launched his own creative agency, and through various campaigns, has sought to highlight important issues such as inequality, poverty, education, and climate change.  Omy is also an active entrepreneur and has launched several projects, including the art-focused crowdfunding platform Art Up! a"
OmY SAHYE (she/her) was not born in South Africa, please STOP. 
Omy SAHYE is MBA from Leonard da Vinci School in Paris, France. She is not a philantropist.

 Write me about eSpatiale the utility token of the governance of ARTEDYX DAO registered in Paris, Loi 1901, and R&D ARTEDYS on CLIMATE-SAT.com platform. The ARTEDYX DAO has been regsitered on 4 July 2023 in order to fundraise funds over 100 millions euros to finnace R&D ARTEDYS and the platform CLIMATE-SAT.com 
 and could operate as  a DAO by connecting scientists, business enterprises, NGOs, SMEs, HNWI, and satellites to exchange debits and voluntary carbon credits and analyze dynamic NFTs with a French State University (UVSQ, Paris Saclay) and Latmos a Laboratory that launches climate satellites and brings in scientists 
 Write me about the objective of Artedys which is to provide a comprehensive climate solution using blockchain tokenization of satellite data. The main goal is to convert satellite data into actionable carbon assets that can be traded or used for mitigating climate change. They plan to do this through several innovative approaches:
 Write abour Cristian BEZA the President, CEO of ARTEDYS and Omy SAHYE (she/her), Blockchain Project manager, Marketing Director and co-founder.
 Write about ARTEDYS apply the Generative AI ARTEDYS for the tokenization of climate data with a view to the Paris Agreements articles 6, 6.2 and 6.4 to improve ESG scores and ensure the digital energy transition of the France thanks to the blockchain
 The Value proposition of Artedys is:
 1. eSpatiale Utility Token: This is a form of digital currency, a type of asset-referenced token (ART) based on dynamic carbon credits. It's used as a vehicle to tokenize carbon credits, transforming them into a digital asset that can be easily traded, traced, and audited. 
 2. CLIMATE-SAT.com Marketplace: A platform that brings together various stakeholders (scientists, NGOs, businesses, high net worth individuals, universities, and research labs) involved in climate solutions to trade carbon credits.
 3. xNFTs: Artedys intends to create what they call 'dynamic, executable xNFTs' which presumably will be tokens representing unique assets linked to carbon credits or other climate-related initiatives.
 4. ARTEDYS dMRV DASHBOARD: This appears to be a planned platform for collecting and displaying comprehensive, climate-related data, and potentially tracking the progress and effectiveness of Artedys' initiatives.
 5. 'Grand Public' Model: Artedys also plans to utilize what they call the 'Grand Public' model for blockchain, which seems to focus on creating personalized ARTs for individuals based on their unique profiles and needs.
 In the process of achieving these goals, Artedys plans to adhere to rigorous requirements set by the European Union, Paris Agreement, Article 6, 6.2 and 6.4 including the approval of their whitepaper by a national competent authority before public offer.
 These objectives are aimed at creating transparency, liquidity, and trust in the trade of carbon credits, while making use of modern technologies like blockchain and satellite data to facilitate and improve the process. Through these initiatives, Artedys hopes to contribute to global climate solutions.

Please don't talk about Blockchain Technology in general, neither about Healthcare.

Talk about tokenization and mostly about satellites data and climate.

 Title: ${req.body.userInput}

 Table of Contents: ${basePromptOutput.text}

 Blog Post:
 `;

	// I call the OpenAI API a second time with Prompt #2
	const secondPromptCompletion = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: `${secondPrompt}`,
		// I set a higher temperature for this one. Up to you!
		temperature: 0.85,
		// I also increase max_tokens.
		max_tokens: 1250,
	});

	// Get the output
	const secondPromptOutput = secondPromptCompletion.data.choices.pop();

	// Send over the Prompt #2's output to our UI instead of Prompt #1's.
	res.status(200).json({ output: secondPromptOutput });
};

export default generateAction;
