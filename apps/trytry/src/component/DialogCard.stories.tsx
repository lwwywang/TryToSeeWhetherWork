import type { Meta, StoryObj } from "@storybook/react";
import { DialogCard } from "@/component/DialogCard.tsx";

import DialogGroupIcon from "@/assets/Dialog/dialog-group.svg?react";

const meta = {
  component: DialogCard,
} satisfies Meta<typeof DialogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DialogCard_: Story = {
  args: {
    Icon: DialogGroupIcon,
    description: "Using a board as a guest is recommended in public areas",
  },
};
