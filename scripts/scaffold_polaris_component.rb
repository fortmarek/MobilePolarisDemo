# frozen_string_literal: true

require "cli/ui"

POLARIS_DIR = "./components"

COMPONENT_TEMPLATE = "export interface $COMPONENT_NAMEProps {
  exampleProp: string;
}

/**
 * Add documentation for $COMPONENT_NAME
 *
 * @section Add appropriate sub-section for the mobile docs site components listing (if applicable)
 */
export function $COMPONENT_NAME({exampleProp}: $COMPONENT_NAMEProps) {
  return null;
}
"

INDEX_TEMPLATE = "export {$COMPONENT_NAME, $COMPONENT_NAMEProps} from './$COMPONENT_NAME';
"

STORYBOOK_TEMPLATE = "import {storiesOf} from '@storybook/react-native';
import React from 'react';

import {Default$COMPONENT_NAME} from './$COMPONENT_NAME.examples';

storiesOf('Polaris', module).add('$COMPONENT_NAME', () => <Default$COMPONENT_NAME />);
"

SCREENSHOTS_TEMPLATE = "import {createScreenshotTest} from '@shopify/react-native-testify';
import React from 'react';

import {Default$COMPONENT_NAME} from './$COMPONENT_NAME.examples';

createScreenshotTest('$COMPONENT_NAME')
  .add(Default$COMPONENT_NAME)
  .add('Polaris docs', () => <Default$COMPONENT_NAME />);
"

EXAMPLES_TEMPLATE = "import {$COMPONENT_NAME} from './$COMPONENT_NAME';
import React from 'react';

/**
 * Default $COMPONENT_NAME
 */
export function Default$COMPONENT_NAME() {
  return <$COMPONENT_NAME exampleProp=\"$COMPONENT_NAME\" />;
}
"

@component_name = CLI::UI.ask("Provide a name for your component in CamelCase")

COMPONENT_DIR = POLARIS_DIR + "/" + @component_name

def content(template:)
  template
    .gsub("$COMPONENT_NAME", @component_name)
end

Dir.mkdir(COMPONENT_DIR)

File.write("#{COMPONENT_DIR}/#{@component_name}.tsx", content(template: COMPONENT_TEMPLATE))

File.write("#{COMPONENT_DIR}/index.ts", content(template: INDEX_TEMPLATE))

File.write("#{COMPONENT_DIR}/#{@component_name}.stories.tsx", content(template: STORYBOOK_TEMPLATE))

File.write("#{COMPONENT_DIR}/#{@component_name}.screenshots.tsx", content(template: SCREENSHOTS_TEMPLATE))

File.write("#{COMPONENT_DIR}/#{@component_name}.examples.tsx", content(template: EXAMPLES_TEMPLATE))

# File.write("#{POLARIS_DIR}/index.ts", "export * from './#{@component_name}';\n", mode: "a")
