import React from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';

const getColor = props => {
  if (props.primary) {
    return '#2196f3';
  }

  if (props.secondary) {
    return '#9C27B0';
  }

  if (props.danger) {
    return '#F44336';
  }

  return '#CECECE';
};

const Wrapper = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-size: 1.2rem;
  width: ${props => props.width || '160px'};
  height: ${props => props.height || '40px'};
  border: none;
  background-color: ${props => getColor(props)};
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.65 : 1)};

  &:active,
  &:focus {
    opacity: 0.9;
  }
`;

const IconWrapper = styled.span`
  display: inline-block;
  vertical-align: center;
  height: 24px;
  margin-right: 0.25rem;
`;

const Label = styled.span`
  display: inline-block;
  vertical-align: center;
  height: 24px;
`;

export default class Button extends React.Component {
  render() {
    const {
      icon,
      label,
      onClick,
      type,
      loading,
      primary,
      secondary,
      danger,
      style,
      width,
      height,
      disabled
    } = this.props;

    return (
      <Wrapper
        type={type}
        onClick={onClick}
        style={style}
        primary={primary}
        secondary={secondary}
        danger={danger}
        width={width}
        height={height}
        disabled={disabled || loading}
      >
        {icon && !loading && <IconWrapper>{icon}</IconWrapper>}
        {loading ? <Spinner /> : <Label>{label}</Label>}
      </Wrapper>
    );
  }
}

const Circle = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-size: 1.2rem;
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border-radius: 50%;
  border: none;
  background-color: ${props => getColor(props)};
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.65 : 1)};

  &:active,
  &:focus {
    opacity: 0.9;
  }
`;

export class ActionButton extends React.Component {
  render() {
    const {
      label,
      onClick,
      type,
      loading,
      primary,
      secondary,
      danger,
      style,
      width,
      height,
      disabled
    } = this.props;

    return (
      <Circle
        type={type}
        onClick={onClick}
        style={style}
        primary={primary}
        secondary={secondary}
        danger={danger}
        width={width}
        height={height}
        disabled={disabled || loading}
      >
        {loading ? <Spinner /> : label}
      </Circle>
    );
  }
}
