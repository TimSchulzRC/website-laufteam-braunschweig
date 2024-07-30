// ./src/app/api/draft-mode/enable/route.ts

import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { client } from "@/sanity/client";
import { token } from "@/sanity/token";
import { SanityClient } from "sanity";

const clientWithToken = client.withConfig({ token });

export async function GET(request: NextRequest) {
  if (!process.env.SANITY_API_READ_TOKEN) {
    return new Response("Missing environment variable SANITY_API_READ_TOKEN", {
      status: 500,
    });
  }

  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    clientWithToken,
    request.url
  );

  if (!isValid) {
    return new Response("Invalid secret", { status: 401 });
  }

  draftMode().enable();
  return NextResponse.redirect(new URL(redirectTo, request.url));
}
async function validatePreviewUrl(
  clientWithToken: SanityClient,
  url: string
): Promise<{ isValid: boolean; redirectTo?: string }> {
  // Implement the logic to validate the preview URL
  // For example, you can check if the URL is valid and retrieve the redirect path
  console.log("RequestURL: ", url);
  console.log("client with token: ", clientWithToken);
  // Here is a simple example implementation:
  const isValid = true; // Replace with your validation logic
  const redirectTo = "/"; // Replace with your redirect path

  return { isValid, redirectTo };
}
