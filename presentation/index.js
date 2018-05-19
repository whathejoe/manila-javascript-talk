// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  S,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

import * as Samples from './samples';

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const Colors = {
  white: '#FFF',
  skyBlue: '#03A9FC',
  black: '#1F2022',
  gray: '#CECECE'
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor={Colors.white}>
          <S type="underline">
            <Heading size={1} fit caps lineHeight={1} textColor={Colors.black}>
              ES6 & Beyond
            </Heading>
          </S>
        </Slide>
        <Slide transition={['fade']} bgColor={Colors.skyBlue}>
          <Heading size={1} textColor={Colors.black}>
            What is ES?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor={Colors.skyBlue}>
          <Heading size={1} textColor={Colors.black}>
            ECMA
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor={Colors.skyBlue}>
          <Heading size={1} textColor={Colors.black}>
            TC39 & ECMAScript
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Initial
          </Heading>
          <List>
            <ListItem>Stage 0 - Strawman</ListItem>
          </List>

          <Heading size={6} textColor="secondary" caps>
            Maturity
          </Heading>
          <List>
            <ListItem>Stage 1 - Proposal</ListItem>
            <ListItem>Stage 2 - Draft</ListItem>
            <ListItem>Stage 3 - Candidate</ListItem>
            <ListItem>Stage 4 - Finished</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>ES6</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>let & const</Heading>
          <CodePane textSize={30} lang="javascript" source={Samples.letconst} />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>fat arrow</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.fatArrow1}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>fat arrow</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.fatArrow2}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>fat arrow</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.fatArrow3}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>default parameters</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.defaultParameters}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>string interpolation</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.stringInterpolation}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>computed property names</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.computedPropertyNames}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>property shorthand</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.propertyShorthand}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>array matching</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.arrayMatching}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>value swapping</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.valueSwapping}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>object destructuring</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.objectDestructuring}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>array rest</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.arrayRest}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>array spread</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.arraySpread}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>ES7</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>array .includes()</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.arrayIncludes}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>exponentiation operator</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.exponentiationOperator}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>ES8</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>async functions</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.asyncAwait}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>string padding</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.stringPadding}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>ES9</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>object rest</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.objectRest}
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2}>object spread</Heading>
          <CodePane
            textSize={30}
            lang="javascript"
            source={Samples.objectSpread}
          />
        </Slide>
      </Deck>
    );
  }
}
