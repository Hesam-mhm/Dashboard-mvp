import React from 'react';
import { Box, Container, Typography, Link, Stack, useTheme } from '@mui/material';
import { useLayout } from '../../core';
import { useLayoutConfig } from '../../core/useLayoutConfig';

const FooterWrapper = () => {
  const { config: layoutConfig } = useLayout();
  const { config } = useLayoutConfig();
  const theme = useTheme();

  if (!config.footer.display) {
    return null;
  }

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: config.footer.backgroundColor,
        borderTop: `1px solid ${config.footer.borderColor}`,
        py: config.footer.padding.top,
        px: config.footer.padding.left,
        mt: 'auto',
        height: config.footer.height,
      }}
    >
      <Container maxWidth={config.content.maxWidth === 'fluid' ? false : config.content.maxWidth}>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
          {config.footer.showCopyright && (
            <Typography
              variant="body2"
              sx={{
                color: config.footer.copyright.color,
                fontSize: config.footer.copyright.fontSize,
              }}
            >
              © 2024 Volleyball Committee. All rights reserved.
            </Typography>
          )}

          {config.footer.showLinks && (
            <Stack direction="row" spacing={config.footer.links.spacing}>
              <Link
                href="#"
                sx={{
                  color: config.footer.links.color,
                  fontSize: config.footer.links.fontSize,
                  textDecoration: 'none',
                  '&:hover': {
                    color: config.footer.links.hoverColor,
                  },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                sx={{
                  color: config.footer.links.color,
                  fontSize: config.footer.links.fontSize,
                  textDecoration: 'none',
                  '&:hover': {
                    color: config.footer.links.hoverColor,
                  },
                }}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                sx={{
                  color: config.footer.links.color,
                  fontSize: config.footer.links.fontSize,
                  textDecoration: 'none',
                  '&:hover': {
                    color: config.footer.links.hoverColor,
                  },
                }}
              >
                Contact Us
              </Link>
            </Stack>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export { FooterWrapper };
