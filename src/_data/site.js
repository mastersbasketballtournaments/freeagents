require( 'dotenv' ).config();

let baseURL = 'https://freeagents.mastersbasketballtournaments.com';

switch ( process.env.ELEVENTY_ENV ) {
	case 'development':
		baseURL = 'http://localhost:8080';
	break;
}

module.exports = {
	baseURL: baseURL
	,title: 'Free Agent Basketball Masters'
	,environment: process.env.ELEVENTY_ENV
};
