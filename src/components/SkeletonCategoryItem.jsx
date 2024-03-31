import { MdOutlineNavigateNext } from "react-icons/md"; 
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import React from 'react'

const SkeletonCategoryItem = () => {
  return (
    <Card className="max-w-[350px]  rounded-sm animate-pulse">
        <CardHeader as="div" className="flex justify-between items-center rounded-sm bg-transparent shadow-none gap-2">
            <Typography as="div"
            variant="h1"
            className="h-5 w-[100px] bg-gray-300 rounded-md">
                &nbsp;
            </Typography>
            <Typography as="div"
            variant="h1"
            className="h-5 w-5 bg-gray-300 rounded-sm ">
                &nbsp;
            </Typography>

        </CardHeader>
        <hr className="text-gray-500 my-3"/>
    <CardBody className="flex flex-col gap-3">
        <Typography
            as="div"
            variant="h1"
            className="min-h-5 w-full py-1 bg-gray-300 rounded-md"
        >
            &nbsp;
        </Typography>
        <Typography
            as="div"
            variant="h1"
            className="min-h-5 w-full py-1  bg-gray-300 rounded-md"
        >
            &nbsp;
        </Typography>
        <Typography
            as="div"
            variant="h1"
            className="min-h-5 w-full py-1  bg-gray-300 rounded-md"
        >
            &nbsp;
        </Typography>
        <Typography
            as="div"
            variant="h1"
            className="min-h-5 w-full py-1  bg-gray-300 rounded-md"
        >
            &nbsp;
        </Typography>
        <Typography
            as="div"
            variant="h1"
            className="min-h-5 w-full py-1  bg-gray-300 rounded-md"
        >
            &nbsp;
        </Typography>
    </CardBody>
</Card>
  )
}

export default SkeletonCategoryItem