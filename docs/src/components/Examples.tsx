import React from 'react';
import styles from './Examples.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {ComponentImage} from './ComponentImage';

interface Example {
  title: string;
  content: string;
  iOSImage: string;
  androidImage: string;
}

interface Props {
  examples: Example[];
}

export function Examples({examples}: Props) {
  return (
    <div className={styles.ExamplesContainer}>
      <Tabs defaultValue={examples[0].title}>
        {examples.map(example => (
          <TabItem
            key={example.title}
            value={example.title}
            label={example.title}
            attributes={{className: styles.ExampleTab}}>
            <div className={styles.ExampleScreenshotContainer}>
              <div className={styles.PlatformContainer}>
                <h3>iOS</h3>
                <ComponentImage imageUrl={example.iOSImage} />
              </div>
              {/* <div className={styles.PlatformContainer}>
                <h3>Android</h3>
                <ComponentImage imageUrl={example.androidImage} />
              </div> */}
            </div>
            <CodeBlock language="tsx" className={styles.codeBlock}>
              {example.content.replace(/add-newline/g, '\n')}
            </CodeBlock>
          </TabItem>
        ))}
      </Tabs>
    </div>
  );
}
