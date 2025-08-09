import { Box, colors } from '@mui/material';

const date = new Date();

export default function Footer() {
  return (
    <Box component="footer" p={3} textAlign="center" fontSize="14px" color={colors.grey[700]}>
      &copy; {date.getFullYear()} Guo Yunhe
    </Box>
  );
}
