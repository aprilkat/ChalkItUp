/*
Author: April Bollinger
Date: 11/15/2021
Project: Chalk it up
 */




const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');

// It is supposed to be a flag.
console.log(chalk.blue('---------------') + chalk.red('-------------------------------'));
console.log(chalk.blue('---------------') + chalk.white('-------------------------------'));
console.log(chalk.blue('---------------') + chalk.red('-------------------------------'));
console.log(chalk.blue('---------------') + chalk.white('-------------------------------'));
console.log(chalk.blue('---------------') + chalk.red('-------------------------------'));
console.log(chalk.white('----------------------------------------------'));
console.log(chalk.red('----------------------------------------------'));
console.log(chalk.white('----------------------------------------------'));
console.log(chalk.red('----------------------------------------------'));
console.log(chalk.white('----------------------------------------------'));
console.log(chalk.red('----------------------------------------------'));
console.log(chalk.white('----------------------------------------------'));

// Small town is the name of the town.
console.log(chalk.yellow('It was a bright and sunny day in small town USA.'));
console.log(chalk.yellow('Everyone was enjoying the sunshine and warm weather.'));


console.log(chalk.redBright('Unfortunately, it would not last.'));
console.log(chalk.redBright('Unbeknownst to the people of small town, there was a storm approaching.'));

chalkAnimation.neon(chalk.grey('It came out of nowhere and the town sank into complete chaos.'));

console.log(chalk.blueBright('It was the worst storm to ever hit the town.'))

// SetTimeout says when it should start or end.
// So this starts after 6 seconds.
// SetInterval will repeat the argument until it runs out of time.
const warning = chalkAnimation.glitch(chalk.redBright('NO ONE COULD ESCAPE'));
setTimeout(() => {
    warning.stop();
}, 6000);


setTimeout(() => {
    console.log(chalk.red('The storm tore apart buildings and crushed cars.'));
    console.log(chalk.red('It knocked down trees and threw sheds.'));
}, 8000);

setTimeout(() => {
    chalkAnimation.neon(chalk.green('But, all things eventually come to an end, even the bad things.'));
}, 10000);


setTimeout(() => {
    console.log(chalk.green('Despite the damage cased, no one was injured.'));
    console.log(chalk.blue('There was of course a lot of clean up and rebuilding to do, but the damage was only to buildings, plants, and cars.'))
}, 12000);



setTimeout(() => {
    const ending = chalkAnimation.rainbow('Thank you for watching!!');
}, 14000);


setTimeout(() => {
    const ending = chalkAnimation.rainbow('Thank you for watching!!');
    ending.stop();
}, 18000);









