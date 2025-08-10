import Box from '@mui/material/Box';


const MuiPractice = () => {
  return (
    <div>
      <h1>MuiPractice</h1>

      <Box sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row'
        },
        alignItems: {
          xs: 'center',
          sm: 'start'
        },
        py: {
          xs: '0px',
          ls: '1rem'
        },
      }} >
        <h2>heading 1</h2>
        <h2>heading 2</h2>
        <h2>heading 3</h2>
      </Box>
    </div>
  )
}

export default MuiPractice