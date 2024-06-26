/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */
export class IdpDetails {
  name: string;
  public details: {
    userPoolId: string
    appClientId: string
  };
}
