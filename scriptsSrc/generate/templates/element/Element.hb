import React from 'react';
import theme from '../../theme';
import styled from 'styled-components';

const select = theme.register('{{pascal name}}', (values) => ({
  /* add your configurable properties here */
})).createSelector();

const {{pascal name}}Impl = theme.connect(styled.{{element}}`
  /* add your css here */
`);

export const {{pascal name}} = (props) => <{{pascal name}}Impl {...props} />;

export default {{pascal name}};
