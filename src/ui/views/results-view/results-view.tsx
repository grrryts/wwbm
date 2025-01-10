import React, { memo } from 'react';

import Image from 'next/image';

import { Box, Button, Typography } from '@mui/material';

import { useResultsViewLogic } from './results-view.logic';
import { useResultsViewStyles } from './results-view.styles';
import { images } from '@/lib/constants/images.constants';
import { formatPrize } from '@/lib/utils/format-prize';

const ResultsView = memo(() => {
  const { currentPrize, handleChangeViewStep } = useResultsViewLogic();
  const sx = useResultsViewStyles();

  return (
    <Box sx={sx.wrapper}>
      <Box sx={sx.content}>
        <Box sx={sx.imageWrapper}>
          <Image
            fill
            priority
            style={sx.image}
            src={images.handThumbsUp}
            alt="thumbs-up"
          />
        </Box>

        <Box sx={sx.actionsWrapper}>
          <Box sx={sx.actionsScoreWrapper}>
            <Typography variant="subtitle1">Total score:</Typography>
            <Typography variant="h1">
              {formatPrize(currentPrize)} earned
            </Typography>
          </Box>

          <Button onClick={handleChangeViewStep}>Try again</Button>
        </Box>
      </Box>
    </Box>
  );
});

ResultsView.displayName = 'ResultsView';

export default ResultsView;
