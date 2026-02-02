import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export default function ShelterCard() {
  return (
    <Box
      sx={{
        width: '90%',
        position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
      }}
    >
     
      <Card
        orientation="horizontal"
        sx={{
          width: '100%',
          overflow: 'auto',
          
        }}
      >
        <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent>
        <Button variant="solid" color="primary" style={{marginLeft: '85%', width:'10%'}}>
              Follow
            </Button>
          <Typography fontSize="xl" fontWeight="lg">
            Shelter's Name 
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            shelter@gmail.com 
          </Typography>
          <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              '& > div': { flex: 1 },
            }}
          >
            <div style={{}}>
              <Typography level="body-xs" fontWeight="lg">
                Mascotas en Adopción
              </Typography>
              <Typography fontWeight="lg">34</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Seguidores
              </Typography>
              <Typography fontWeight="lg">980</Typography>
            </div>
          </Sheet>
          <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
            
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}