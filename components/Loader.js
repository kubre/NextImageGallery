import { Typography } from "@mui/material";
import { Box } from "@mui/system";
// Assets

const Loader = () => {
  return (
    <Box
      display="flex"
      height="90vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <img src="/images/loadergif.gif" height={200} alt="Loading" />
      <Typography variant="h6">Loading...</Typography>
    </Box>
  );
};

export default Loader;
