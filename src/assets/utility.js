import styled from 'styled-components';
import { system, space, color, layout, typography } from 'styled-system';

export const Flex = styled('div')(
  system({
    flex: {
      properties: ['display'],
      defaultScale: ['flex', 'inline-flex', 'block', 'inline-block'],
    },
    float: {
      properties: ['float'],
      defaultScale: ['left', 'right', 'center'],
    },
    justifyContent: {
      properties: ['justify-content'],
      defaultScale: ['flex-start', 'flex-end', 'center', 'space-around', 'space-between', 'space-evenly'],
    },
  }),
);

export const Box = styled.div(space, color, layout, typography);
