import React, { useState } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
`;

export const LoginFormWrapper = styled.div`
  width: 40%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: white;
  border-radius: 1rem;
`;

export const LoginFormTitle = styled.h2`
  text-align: center;
  color: black;
  padding-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.32rem;
  color: black;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.2rem;
  border: 0;
  text-decoration: none;
`;

export const Button = styled.button`
  padding: 0.63rem;
  font-size: 1rem;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
  border: 0;
  border-radius: 0.2rem;
  text-decoration: none;
`;