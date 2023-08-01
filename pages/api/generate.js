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
About Cristian BEZA is teh President and CEO of ARTEDYX, ARTEDYS and CLIMATE-SAT.com,
About Omy SAHYE is a woman (she/her) Omy SAHYE is a woman and she is the Blockchain Project Manager and Marketing Director of ARTEDYX, ARTEDYS, CLIMATE-SAT.com.,

ARTEDYX is not 3D printing and nothing here is printing, neither 3D.
OMY SAHYE is a woman is the co-founder of ARTEDYX, ARTEDYS and CLIMATE-SAT.com.
She has an MBA from from Leonard da Vinci School in Paris, France. She is not a philantropist.
Omy SAHYE is a woman, born in Mauritius Island.
Please STOP with this text "Omy Sahye is an artist, entrepreneur and creative thinker from Johannesburg, South Africa who is a firm believer in the power of art to make a difference in people’s lives. Born in South Africa, Omy grew up surrounded by a diverse culture and landscapes which inspired his creative thinking and led him to pursue a career in art and design. In 2009, Omy launched his own creative agency, and through various campaigns, has sought to highlight important issues such as inequality, poverty, education, and climate change.  Omy is also an active entrepreneur and has launched several projects, including the art-focused crowdfunding platform Art Up! a"
OmY SAHYE (she/her) was not born in South Africa, please STOP. 
Omy SAHYE is a woman and she has an MBA from Leonard da Vinci School in Paris, France. She is not a philantropist.

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

Omy Sahye Linkedin profile "Omy SAHYE
Precision ...... Perseverance ............................. Risk Taking !!
France
Summary
• MBA Degree from EMLV (PARIS).
• 8 years of Executive Experience in Marketing and Communication. • Professional experience in 4 countries (UK, France, Switzerland and Mauritius) and 4 languages (French,
English, Hindi and German).
• EXPERTISE IN THE LUXURY INDUSTRY.
• EXPERTISE IN RETAIL and TOURISM INDUSTRY.
• EXPERTISE IN THE BLOCKCHAIN INDUSTRY
I am a business-savvy leader. I approach business challenges with a combination of analytical and creative thinking to drive growth. I am experienced in all elements of modern marketing in a range of industries (brand building, e-commerce, social and traditional media, CRM, content creation, events, retail concept development, etc.).
After 8 years of Hotel Sales & Marketing experience, I am a highly motivated luxury/ lifestyle- Hotel Director with first class experience gained from within the 5 star hotel industry. A business minded, goal orientated, natural communicator with the ability to influence on all levels and extremely well networked and acutely aware of a brand’s need for strategic and genuine representation across the marketplace
In the Blockchain and Space Industry Management.
I am working on a Smart Digital ID, Smart Digital Air Wallet Cross- Blockchain Project for KNOT Communications. The cross-blockchain technology allows composable programming across blockchains. It allows for inter-contract and inter-blockchain function calls that are both synchronous and atomic. The Blockchain Industry is ever so evolutive and I keep learning more everyday.
+ Room Revenue Management of 4,8 M €
In charge of all Front Office and Back Office including Sales & marketing activities:
Page 1 of 4
 Main missions:
• Switch from 3* to 4* as an independent hotel
• Upgrade to Luxury Boutique Hotel.
• Creation of direct and indirect hotel distribution and connectivity
• Implementation of a new PMS : PROTEL and connection to a new booking engine HERMES.
- Driving strategy and full change of business mix
• Digital Marketing
• Quality auditing & assessment
• 13% increase of turnover
• Direct management : 10 people
- Prospection: corporate, MICE and FIT clients
- E-mailings, newsletters, flash sales, set-up of partnerships
- Development of hotel’s visibility on internet through social media & SEO /SEA
- Web Management/Reservations control.
Operational activities:
- Hotel management, Front Office management, Financial management /
- Customer complaints / Public relations / Customer Journey.
Experience
ARTEDYS
Managing Director
March 2021 - Present (2 years 6 months) Ville de Paris, Île-de-France, France
KNOT COMMUNICATIONS
Digital Marketing Blockchain Project Manager November 2020 - Present (2 years 10 months) Paris
#ANGELS (Hashtag ANGELS) 6 years
Digital Marketing Manager September 2017 - Present (6 years) PARIS 1st
 Page 2 of 4

 Commercial
February 2018 - Present (5 years 7 months) Paris
Digital Consultant at ANGELS
February 2018 - November 2020 (2 years 10 months) Région de Paris, France
Global Women's Forum Member
2016 - 2019 (3 years) Paris/London
Sextant France & International Commerciale
March 2015 - February 2018 (3 years) Région de Paris, France
REAL ESTATE PROPERTY DEVELOPMENT AND SALES Visit : http://omy.sahye.sextantfrance.fr/
Luxe***** Paris
GUEST RELATIONS MANAGER/FRONT OFFICE SUPERVISOR February 2010 - December 2015 (5 years 11 months)
Région de Paris, France
FRONT OFFICE MANAGEMENT RESERVATIONS
WEB MANAGEMENT CONCIERGE
PUBLIC RELATIONS DUTY MANAGER
Givenchy Spa
Marketing
March 2004 - September 2007 (3 years 7 months) Paris et Ile Maurice
COMO The Halkin London RECEPTION/GUESTS RELATIONS 2001 - 2003 (2 years)
Page 3 of 4

Sun Resorts Le Saint Géran Hôtel
Quality Assurance Quality Control Manager 1999 - 2001 (2 years)
ILE MAURICE
TRAINING OF HOSPITALITY STAFF
Education
EMLV - Ecole de Management Léonard de Vinci MBA DIGITAL MARKETING STRATEGY, DIGITAL
EMLV - Ecole de Management Léonard de Vinci Master Global, Management · (2016 - 2018)
Université Paris Dauphine
DIPLOMA, REVENUE MANAGEMENT · (2014 - 2015)
Université Paris 1 Panthéon-Sorbonne
DESS EN GESTION DES ENTREPRISES, Affaires / gestion, général · (2003 - 2004)
University of West London
DEGREE IN MANAGEMENT, HOSPITALITY MANAGEMENT · (1996 - 2000)
 Page 4 of 4"

 Cristian BEZA Linkedin profile "Cristian BEZA
 Industrial Entrepreneur since 1994 | Builder & Shipper of ARTEDYS is (ART "Asset Referenced Tokens" eSpatiale) / DAO since 2020 | DeSat Creator for trading dynamic carbon credits tokens CLIMATE- SAT.com
 France
 Summary
 eSpatiale is the utility token that powers Climate-SAT.com, a
 fully automated marketplace or Automated Market Maker (AMM) designed to address global climate issues. Climate-SAT aims to unite various stakeholders - scientists, business enterprises, non- profit organizations, small and medium enterprises (SMEs), high-net- worth individuals (HNWIs), and satellites - in a collaborative platform for the exchange of carbon debits and voluntary carbon credits. Through this unique integration of technology and commitment to sustainability, we strive to lighten the burden of climate change on humanity.
 Experience
 ARTEDYX
 Président
 June 2023 - Present (2 months) Ville de Paris, Île-de-France, France
 **Article 1: Name**
 A non-profit association called ARTEDYX is formed by the members of these statutes. The association is constituted in accordance with the Law of July 1, 1901 and the decree of August 16, 1901, governing associations in France. This association operates as a Decentralized Autonomous Organization (DAO), with an Asset Referenced Token (ART) named eSpatiale (eSe). The latter is a governance token and a utility token. The eSpatiale (eSe) token is indexed on carbon credit exchanges.
 **Article 2: Head Office**
  Page 1 of 5
  The registered office of the association is fixed at 145 rue de Charenton, 75012 Paris, France. It may be transferred to any other location by decision of the Board of Directors.
 **Article 3: Purpose**
 The purpose of the association is to manage and finance the CLIMATE- SAT platform, a DAO dedicated to the fight against climate problems. This will be done through fundraising through an Initial Coin Offering (ICO) and investments in the platform. The eSpatiale (eSe) token aims to become an Asset Referenced Token by being backed by carbon credit exchanges.
 ARTEDYS
 17 years 3 months
 Président
 March 2021 - Present (2 years 5 months) Ville de Paris, Île-de-France, France
 Climate-SAT operates as a fully-automated marketplace, designed specifically to streamline the exchange of carbon credits. Leveraging the power of Automated Market Maker (AMM) technology, it provides a highly efficient, transparent, and accessible platform for all stakeholders in the carbon market. Our goal is to drive meaningful action against climate change by simplifying the process of buying and selling carbon credits, thus facilitating the flow of investments towards sustainable and environmentally friendly projects.
 President ArtedyX / S DAO - eSpatialeTM - 200M eSpatiale listed on Uniswap
 May 2006 - Present (17 years 3 months)
 Région de Paris , France
 ArtedyX DAO is a dedicated decentralized autonomous organization that has successfully launched 200 million units of eSpatialeTM, our proprietary utility token, on Uniswap. Our primary objective is to alleviate the impact of climate change on humanity. Through the use of blockchain technology, we are facilitating a revolutionary approach to carbon credits exchange, environmental sustainability, and climate action. Our eSpatialeTM tokens form the backbone of this initiative, enabling a fluid marketplace and driving investments towards projects that have a positive impact on our climate.
 Page 2 of 5
 
  THE GERSON LEHRMAN GROUP COUNCIL OF
 FINANCES & BUSINESS AND COUNCIL OF MEDIA AND
 TELECOMMUNICATIONS
 Both Councils OF RESEARCH
 September 2006 - November 2007 (1 year 3 months)
 I am a distinguished member of the Council at GLG (Gerson Lehrman Group), participating in both the International Finances & Business Services Research, and the Media and Telecommunications Research divisions. In these roles,
 I contribute my industry expertise to help shape informed decisions and strategies. My input aids in the development of research, providing valuable insights into the dynamic landscapes of finance, business services, media, and telecommunications.
 The GERSON LEHRMAN GROUP; LOGICALIS; RUMELI
 TELEKOM; LUCENT TECH & KENAN; KPN ORANGE; MCI
 WIRELESS ;
 Entrepreneur, Sales, Business Development, Project Manager, March 1996 - April 2006 (10 years 2 months)
 In 1996, I was privileged to receive my second H1B visa for a 3-year tenure with MCI Wireless in Dallas/Ft. Worth, following my first H1B visa with Celcore.
 Throughout my career, I have held diverse positions worldwide, covering a wide range of responsibilities related to Business Development, Sales, and Project Management within the wireless industry. My experience spans from working with network operators to Network Infrastructure and value-added applications, M-Commerce, CRM, Business Process, Billing & Customer Care, Mediation, and Service Level Agreements.
 I have had the opportunity to navigate markets across the USA and EMEA, applying my broad-based skills and leveraging my deep understanding of the industry to drive growth and improvement. My journey has been marked by a commitment to innovation, collaboration, and excellence.
 Celcore Systems LTD
 GSM Consultant Director
 March 1994 - March 1995 (1 year 1 month) Corinth, Mississippi + Memphis, Tn
 Initiated and led the GSM Project in the USA, facilitated by a 3-year H1B visa. This pivotal role allowed me to significantly contribute to the development
 Page 3 of 5
 
  and implementation of GSM technology across the country, marking a key milestone in my professional journey
 ALCATEL
 Project Manager
 May 1987 - August 1993 (6 years 4 months)
 As part of the GSM Project, we developed and implemented applications dedicated to providing Supplementary Value-Added Services. These applications were designed to enhance user experiences and provide additional functionality, further elevating the value of our GSM services.
 SITINTEL
 Responsible Development Engineer March 1986 - May 1987 (1 year 3 months)
 Entrusted with the development and testing of OSI-based systems at SITINTEL, a renowned manufacturer of telecommunications and network systems. My role involved working extensively with protocols such as X.25, Session, Presentation, and Application layers, ensuring their seamless integration and functionality. This experience allowed me to deepen my understanding of network architectures and strengthen my technical skills.
 OLIVETTI
 Sales Support
 May 1985 - March 1986 (11 months) Paris
 Tasked with promoting Olivetti's innovative computer product lines across Europe. As the driving force behind the strategic marketing and sales efforts, I successfully introduced these Italian technological advancements to the European market. My role encompassed understanding the unique features of Olivetti's products, identifying target markets, and executing effective promotional strategies.
 Electro Scientific Industries, Inc.
 Pre Sales Engineer
 January 1984 - May 1985 (1 year 5 months) Paris Area, France
 As a key representative of ESI, a leading designer and manufacturer of advanced production equipment for the microelectronics industry (Nasdaq: ESIO), I was responsible for cultivating and maintaining relationships with clients across France and Europe. My role encompassed not only client
 Page 4 of 5
 
 engagement but also system maintenance, new project development, and the proposal of tailored solutions to meet individual client needs. Through establishing technical relationships, I was able to effectively communicate our capabilities and contribute to the company's reputation for quality and innovation.
 Education
 ESME-Sudria | Ecole Spéciale de Mécanique et d'Electricité Engineer, IT / Telecom · (1982 - 1985)
 ENA - Ecole Nationale d'Administration Mutécos , DGE Bercy · (2013 - 2014)
 Rouen Business School MBA, Business · (1991 - 1993)
 Université Paris 13
 DUT Mesures Physiques , Sciences physiques · (1978 - 1980)
 Universitatea POLITEHNICA din București
 1 ere année, Géométrie descriptive & equations différentielles · (1976 - 1977)
  Page 5 of 5"

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
