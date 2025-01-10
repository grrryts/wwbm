import React, { memo } from 'react';

import Image from 'next/image';

import { Box, Button, Typography } from '@mui/material';

import { useWelcomeViewLogic } from './welcome-view.logic';
import { useWelcomeViewStyles } from './welcome-view.styles';
import { images } from '@/lib/constants/images.constants';

const WelcomeView = memo(() => {
  const { handleChangeViewStep } = useWelcomeViewLogic();
  const sx = useWelcomeViewStyles();

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
          <Typography variant="h1">Who wants to be a millionaire?</Typography>
          <Button onClick={handleChangeViewStep}>Start</Button>
        </Box>
      </Box>
    </Box>
  );
});

WelcomeView.displayName = 'WelcomeView';

export default WelcomeView;
