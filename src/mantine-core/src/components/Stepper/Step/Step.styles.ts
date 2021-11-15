import { createStyles, MantineColor, MantineSize } from '@mantine/styles';

interface StepStyles {
  color: MantineColor;
  iconSize: number;
  size: MantineSize;
  allowStepClick: boolean;
}

const iconSizes = {
  xs: 34,
  sm: 36,
  md: 42,
  lg: 48,
  xl: 52,
};

export default createStyles(
  (theme, { color, iconSize, size, allowStepClick }: StepStyles, getRef) => {
    const stepIcon = getRef('stepIcon');
    const stepCompletedIcon = getRef('stepCompletedIcon');
    const _iconSize = iconSize || theme.fn.size({ size, sizes: iconSizes });

    return {
      step: {
        display: 'flex',
        alignItems: 'center',
        cursor: allowStepClick ? 'pointer' : 'default',
      },

      stepIcon: {
        boxSizing: 'border-box',
        ref: stepIcon,
        height: _iconSize,
        width: _iconSize,
        minWidth: _iconSize,
        borderRadius: _iconSize,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        border: `2px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
        }`,
        transition: 'background-color 150ms ease, border-color 150ms ease',
        position: 'relative',
        fontWeight: 700,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
        fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
      },

      stepCompletedIcon: {
        ref: stepCompletedIcon,
        ...theme.fn.cover(),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.white,
      },

      stepProgress: {
        [`& .${stepIcon}`]: {
          borderColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 7 : 6),
        },
      },

      stepCompleted: {
        [`& .${stepIcon}`]: {
          backgroundColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 7 : 6),
          borderColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 7 : 6),
          color: theme.white,
        },
      },

      stepBody: {
        marginLeft: size === 'xl' || size === 'lg' ? theme.spacing.md : theme.spacing.sm,
      },

      stepLabel: {
        fontWeight: 500,
        fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
        lineHeight: 1,
      },

      stepDescription: {
        marginTop: theme.fn.size({ size, sizes: theme.spacing }) / 3,
        fontSize: theme.fn.size({ size, sizes: theme.fontSizes }) - 2,
        lineHeight: 1,
      },
    };
  }
);