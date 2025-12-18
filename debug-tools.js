// Debug script to check toolsData
import { toolsData } from './src/data/toolsData.js';

console.log('Total tools:', toolsData.length);
console.log('All tools:', toolsData.map(tool => tool.name));
console.log('Surah Kafirun exists:', toolsData.find(tool => tool.name === 'Surah Kafirun'));