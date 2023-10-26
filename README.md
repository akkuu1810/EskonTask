# EskonTask

Error Coming
./node_modules/next-auth/next/index.d.ts:2:15
Type error: ',' expected.

  1 | import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
> 2 | import { type NextRequest } from "next/server";
    |               ^
  3 | import type { AuthOptions, Session } from "..";
  4 | import type { CallbacksOptions } from "../core/types";
  5 | interface RouteHandlerContext {

I Updated the reuquest in the system but the node modules created on there server cannot be managed manually so getting deployment error.

Soluion
import type { NextRequest } from "next/server";
