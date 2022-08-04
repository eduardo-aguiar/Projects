import { Box, Button } from '@mui/material';
import fetcher from 'helpers/fetcher';
import { getSession, signOut, useSession } from 'next-auth/react';
import { PlexusResponse } from 'types/plexusResponse';

import AccessDenied from '../../components/AccessDenied';


type searchParameters = {
    q?: any;
    cat: any;
    glutenfree: boolean;
    gmofree: boolean;
    vegetarian: boolean;
    sort: string;
    order: string;
    size: any;
}

enum Categories {
    Combos = '1HHGZPX8Pqk0ea0qgAE46E',
    WelcomePack = '2m338iqoI0MMQGoqqguImM',
    GeneralNutrition = '3n3TYJs6DKmQEUia6s60yQ',
    WeightManagement = '4aF2m72rA4coCcAoMmSiyS',
    Skincare = '5ypcnP00yQOGWkKcKw6QoC',
    ShopOn = '4VqVrkmnVYEeKw4M8GYE08',
    Accessories = '3fbjZiKngAqUEGICGWaKcY',
    ActiveLifestyle = '53mop72B9SO6EGkWQoKUAm',
    PersonalCare = '6U6CV9ww8gmkooMG8uEycS',
    TrialTravel = '6e6uSSJFGjh4S1j7cfhgYu'
}

const param: searchParameters = {
    cat: Categories.Combos,
    glutenfree: false,
    gmofree: false,
    vegetarian: false,
    sort: 'name',
    order: 'asc',
    size: 25
}

const Play = ({plexusProducts}) => {
  const { status, data: session } = useSession({
    required: false,
  });

  console.dir(plexusProducts);

  return (
    <Box color="primary">
      {JSON.stringify(plexusProducts)}
    </Box>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const url = new URL(process.env.PLEXUS_API);

  for (let k in param) { url.searchParams.append(k, param[k]); }

  console.log('url', url)

  try {
    const fetchedProducts =  await fetcher<PlexusResponse>(url)

    console.log(fetchedProducts)
    if (!fetchedProducts) {
      return { notFound: true };
    }
    return { props: { plexusProducts: fetchedProducts } };
  } catch (e) {
    return { notFound: true };
  }
}

export default Play;
