import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@joaowillamy-test-quero/core";

import * as S from "./Rate.styled";

const Rate = ({ value }) => {
  const ARRAY_STARS = [1, 2, 3, 4, 5];

  const GetIcon = ({ start }) => {
    if (value > start - 0.5) return <Icon.StarFill />;
    if (value > start - 1) return <Icon.StarHalf />;
    if (value < start) return <Icon.Star />;
  };

  return (
    <>
      <S.Rate>
        {ARRAY_STARS.map(start => {
          return (
            <S.RateItem key={start}>
              <GetIcon start={start} />
            </S.RateItem>
          );
        })}
      </S.Rate>
    </>
  );
};

Rate.propTypes = {
  value: PropTypes.number
};

export default Rate;
