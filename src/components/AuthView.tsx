import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SigninForm, SignupForm } from 'src/components';

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`;

const HeroContainer = styled.div`
  grid-row: 1 / 1;
  grid-column: 1 / 1;
  padding: 100px;
  padding-right: 50px;
`;

const HeroTitle = styled.h2`
  font-family: 'Roboto';
  color: rgba(255, 255, 255, 0.9);
  font-size: 50px;
`;

const HeroDescription = styled.p`
  font-family: 'Open Sans';
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
`;

const HeroFeatureList = styled.ol`
  font-family: 'Open Sans';
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
`;

const HeroFeatureItem = styled.li`
  font-family: 'Open Sans';
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
`;

const FormContainer = styled.div`
  grid-row: 1 / 1;
  grid-column: 2 / 2;
  padding: 100px;
  padding-left: 50px;
`;

const FormDialog = styled.div`
  background: rgba(255, 255, 255, 0.1);
  min-width: 250px;
  min-height: 600px;
  border-radius: 3px;
`;

const AuthView: React.FunctionComponent = () => (
  <Container>
    <HeroContainer>
      <HeroTitle>Hey there! 😍</HeroTitle>
      <HeroDescription>
        Thanks for dropping by and checking out my messaging app! <br />
        This app provides minimal set of features for communicating between users in a workspace.
      </HeroDescription>
      <HeroFeatureList>
        <HeroFeatureItem>Create customized user profile.</HeroFeatureItem>
        <HeroFeatureItem>Join existing or create your own customized workspace.</HeroFeatureItem>
        <HeroFeatureItem>Chat with the workspace users in private or in channels.</HeroFeatureItem>
      </HeroFeatureList>
      <HeroDescription>Start by creating yourself an user profile! 👉</HeroDescription>
    </HeroContainer>
    <FormContainer>
      <FormDialog>
        <Switch>
          <Route path={'/signin'} exact component={SigninForm} />
          <Route path={'/signup'} exact component={SignupForm} />
          <Redirect to={'/signin'} />
        </Switch>
      </FormDialog>
    </FormContainer>
  </Container>
);

export default AuthView;
