import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        // Root container styles
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        fontFamily: 'Lexend, "Noto Sans", sans-serif',
        justifyContent: 'space-between',
        overflowX: 'hidden',
      }}
    >
      {/* Main Content */}
      <Box>
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            p: 2,
            pb: 1,
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: '#111418',
              fontWeight: 'bold',
              textAlign: 'center',
              flex: 1,
            }}
          >
            ClassPass
          </Typography>
        </Box>

        {/* Top banner */}
        <Box sx={{ px: { xs: 0, sm: 2 }, py: { xs: 0, sm: 1 } }}>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              minHeight: 320,
              borderRadius: { xs: 0, sm: 2 },
              backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 25%), url("https://cdn.usegalileo.ai/sdxl10/c4ee3e74-7482-4fb0-ba88-f0f71e92abcd.png")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h5"
                sx={{ color: '#fff', fontWeight: 'bold' }}
              >
                Choose your own adventure
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Section: Get fit with a plan... */}
        <Typography
          variant="h6"
          sx={{
            color: '#111418',
            fontWeight: 'bold',
            textAlign: 'center',
            px: 2,
            pt: 4,
            pb: 2,
          }}
        >
          Get fit with a plan that's right for you
        </Typography>

        {/* Section: Popular classes */}
        <Typography
          variant="h6"
          sx={{
            color: '#111418',
            fontSize: '22px',
            fontWeight: 'bold',
            px: 2,
            pt: 3,
            pb: 1,
          }}
        >
          Popular classes
        </Typography>

        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              p: 2,
            }}
          >
            {/* Card 1 */}
            <Box sx={{ flex: '0 0 auto', minWidth: 150, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box
                sx={{
                  width: '100%',
                  pt: '133.33%', // aspect ratio 3/4
                  backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/150104be-3a13-4f55-8291-d95483ed69e5.png")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 2,
                }}
              />
              <Typography
                variant="body1"
                sx={{ color: '#111418', fontWeight: 500 }}
              >
                Yoga
              </Typography>
            </Box>
            {/* Card 2 */}
            <Box sx={{ flex: '0 0 auto', minWidth: 150, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box
                sx={{
                  width: '100%',
                  pt: '133.33%',
                  backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/1650b3a9-4a28-41dd-8cc4-10e42bbe15ce.png")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 2,
                }}
              />
              <Typography
                variant="body1"
                sx={{ color: '#111418', fontWeight: 500 }}
              >
                Cycling
              </Typography>
            </Box>
            {/* Card 3 */}
            <Box sx={{ flex: '0 0 auto', minWidth: 150, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box
                sx={{
                  width: '100%',
                  pt: '133.33%',
                  backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/29687d3d-936c-4a0e-962f-1facd96d8f76.png")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 2,
                }}
              />
              <Typography
                variant="body1"
                sx={{ color: '#111418', fontWeight: 500 }}
              >
                Boxing
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Section: What’s new */}
        <Typography
          variant="h6"
          sx={{
            color: '#111418',
            fontSize: '22px',
            fontWeight: 'bold',
            px: 2,
            pt: 3,
            pb: 1,
          }}
        >
          What’s new
        </Typography>
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              p: 2,
            }}
          >
            {/* Card 1 */}
            <Box sx={{ flex: '0 0 auto', minWidth: 120, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box
                sx={{
                  width: '100%',
                  pt: '133.33%', // aspect ratio 3/4
                  backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/37a193da-e3ba-4fdb-a535-4001e85d4f29.png")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 2,
                }}
              />
              <Typography variant="body1" sx={{ color: '#111418', fontWeight: 500 }}>
                Yoga
              </Typography>
            </Box>
            {/* Card 2 */}
            <Box sx={{ flex: '0 0 auto', minWidth: 120, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box
                sx={{
                  width: '100%',
                  pt: '133.33%',
                  backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/a1631578-b65a-4330-ae8a-88377005afaa.png")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 2,
                }}
              />
              <Typography variant="body1" sx={{ color: '#111418', fontWeight: 500 }}>
                Cycling
              </Typography>
            </Box>
            {/* Card 3 */}
            <Box sx={{ flex: '0 0 auto', minWidth: 120, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box
                sx={{
                  width: '100%',
                  pt: '133.33%',
                  backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/f3885d13-aae5-4fb9-8fb6-159523df0943.png")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 2,
                }}
              />
              <Typography variant="body1" sx={{ color: '#111418', fontWeight: 500 }}>
                Boxing
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Section: From the blog */}
        <Typography
          variant="h6"
          sx={{
            color: '#111418',
            fontSize: '22px',
            fontWeight: 'bold',
            px: 2,
            pt: 3,
            pb: 1,
          }}
        >
          From the blog
        </Typography>

        {/* Blog card 1 */}
        <Box sx={{ display: 'flex', gap: 2, backgroundColor: '#fff', px: 2, py: 1 }}>
          <Box
            sx={{
              width: 120,
              height: 70,
              borderRadius: 2,
              backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/093ad049-dcf7-4cad-903c-ab89512c117c.png")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="body1" sx={{ color: '#111418', fontWeight: 500 }}>
              Press Release: ClassPass acquires Fitmob
            </Typography>
            <Typography variant="body2" sx={{ color: '#60758a' }}>
              ClassPass
            </Typography>
            <Typography variant="body2" sx={{ color: '#60758a' }}>
              Dec 15, 2015
            </Typography>
          </Box>
        </Box>

        {/* Blog card 2 */}
        <Box sx={{ display: 'flex', gap: 2, backgroundColor: '#fff', px: 2, py: 1 }}>
          <Box
            sx={{
              width: 120,
              height: 70,
              borderRadius: 2,
              backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/a928158f-6512-4487-a714-9a04a4ddae83.png")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="body1" sx={{ color: '#111418', fontWeight: 500 }}>
              How to take care of your body and mind at home
            </Typography>
            <Typography variant="body2" sx={{ color: '#60758a' }}>
              ClassPass
            </Typography>
            <Typography variant="body2" sx={{ color: '#60758a' }}>
              Jan 1, 2022
            </Typography>
          </Box>
        </Box>

        {/* Blog card 3 */}
        <Box sx={{ display: 'flex', gap: 2, backgroundColor: '#fff', px: 2, py: 1 }}>
          <Box
            sx={{
              width: 120,
              height: 70,
              borderRadius: 2,
              backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/b13892b0-a3f7-4972-a8af-76b4c8fe357d.png")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="body1" sx={{ color: '#111418', fontWeight: 500 }}>
              The future of fitness is hybrid
            </Typography>
            <Typography variant="body2" sx={{ color: '#60758a' }}>
              ClassPass
            </Typography>
            <Typography variant="body2" sx={{ color: '#60758a' }}>
              Jan 1, 2022
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Footer / Bottom Button */}
      <Box>
        <Box sx={{ display: 'flex', px: 2, py: 1 }}>
          <Button
            fullWidth
            variant="text"
            sx={{
              minWidth: 84,
              maxWidth: 480,
              mx: 'auto',
              borderRadius: '9999px',
              height: 40,
              color: '#111418',
              fontWeight: 'bold',
              textTransform: 'none',
              // If you want a border or different background, tweak here
            }}
          >
            Start your free trial
          </Button>
        </Box>
        <Box sx={{ height: 20, backgroundColor: '#fff' }} />
      </Box>
    </Box>
  );
};

export default Home;
