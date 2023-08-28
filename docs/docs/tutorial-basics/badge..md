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
content: "import {Badge} from '@shopify/polaris-react-native';add-newlineadd-newlineexport function DefaultBadge() {add-newline return <Badge text=\"Attention\" />;add-newline}add-newline",
iOSImage: "/img/ios/Badge_PolarisDocs.png",
androidImage: "/img/generated/android/Badge_AttentionMediumEmphasis.png",
}
]}
/>

## Props

### type

`Required`
**&quot;attention&quot; | &quot;neutral&quot; | &quot;critical&quot; | &quot;warning&quot; | &quot;success&quot; | &quot;highlight&quot;**

Determines the severity, urgency, or purpose of the badge.

- `highlight`: Use to call out an object or action as having an important attribute. For example, marking an option as “Recommended” or marking a theme as “Published”.
- `attention`: Use to draw attention to an item that may need action.
- `success`: Use to indicate a successful, completed, or desirable state when it’s important to provide positive reinforcement to merchants.
- `neutral`: Use to give a non-critical status update on a piece of information or action.
- `warning`: Use for critical and time-sensitive issues that require merchants’ attention and potential action. Warning events are often reversible. Keep in mind that seeing this badge can feel stressful for merchants so it should only be used when absolutely necessary.
- `critical`: Use for critical and irreversible issues that require merchants’ attention and potential action. Keep in mind that seeing this badge can feel stressful for merchants so it should only be used when absolutely necessary.
  Low emphasis badge has fewer states than medium emphasis. Available values are:

- `success`: Use to indicate a successful, completed, or desirable state when it’s important to provide positive reinforcement to merchants.
- `neutral`: Use to give a non-critical status update on a piece of information or action.
- `warning`: Use for critical and time-sensitive issues that require merchants’ attention and potential action. Warning events are often reversible. Keep in mind that seeing this badge can feel stressful for merchants so it should only be used when absolutely necessary.
- `critical`: Use for critical and irreversible issues that require merchants’ attention and potential action. Keep in mind that seeing this badge can feel stressful for merchants so it should only be used when absolutely necessary.

---

### emphasis

**&quot;medium&quot; | &quot;low&quot;**

The `emphasis` attribute determines the style of the badge. Available values are:

- `medium`: Has a background, which provides higher visual hierarchy compared to the low emphasis badge.
- `low`: Has lower contrast and has fewer states because of a11y concerns.

---

### text

`Required`
**string**

The text of the badge. Badge text should:

- Use a single word to describe the status of an object.
- Only use two words if you need to describe a complex state. For example, “Partially refunded” and “Partially fulfilled”.
- Always describe the status in the past tense. For example, refunded not refund.

---

_Are you missing something in this component? Take a look [here](/react_native/development/polaris/Contributing#how-to-update-an-existing-component) to see how to extend it_
