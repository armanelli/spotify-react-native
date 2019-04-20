import React, { Component } from "react";

import { View } from "react-native";

import {
  Container,
  CoverBackground,
  EpisodeInfo,
  Title,
  Author,
  Controls,
  ControlButton,
  ControlIcon
} from "./styles";

export default class Player extends Component {
  teste() {}

  render() {
    return (
      <Container>
        <CoverBackground
          source={{
            uri: "https://s3-sa-east-1.amazonaws.com/gonative/cover1.png"
          }}
        />
        <EpisodeInfo>
          <Title>Papercut</Title>
          <Author>Linkin Park</Author>
        </EpisodeInfo>

        <Controls>
          <ControlButton onPress={() => this.teste()}>
            <ControlIcon name="skip-previous" />
          </ControlButton>
          <ControlButton onPress={() => this.teste()}>
            <ControlIcon name="play-circle-filled" />
          </ControlButton>
          <ControlButton onPress={() => this.teste()}>
            <ControlIcon name="skip-next" />
          </ControlButton>
        </Controls>
      </Container>
    );
  }
}
