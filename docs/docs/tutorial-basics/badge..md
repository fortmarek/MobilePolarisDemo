---
custom_edit_url: null
---

import {Examples} from '@site/src/components/Examples';

# Badge

[src/components/Badge/Badge.tsx](https://github.com/Shopify/mobile/tree/main/src/components/Badge/Badge.tsx)

Badges are used to inform merchants of the status of an object or of an action that’s been taken.

## Examples

<Examples
examples={[
{
title: "Default Badge",
content: "import {Badge} from '@shopify/polaris-react-native';add-newlineadd-newlineexport function DefaultBadge() {add-newline return <Badge>Badge</Badge>;add-newline}add-newline",
iOSImage: "/img/ios/Badge_DefaultBadge.png",
androidImage: "/img/generated/android/Badge_AttentionMediumEmphasis.png",
}
]}
/>

## Props

---

### children

`Required`
**string**

The text of the badge. Badge text should:

- Use a single word to describe the status of an object.
- Only use two words if you need to describe a complex state. For example, “Partially refunded” and “Partially fulfilled”.
- Always describe the status in the past tense. For example, refunded not refund.

---

_Are you missing something in this component? Take a look [here](/react_native/development/polaris/Contributing#how-to-update-an-existing-component) to see how to extend it_
