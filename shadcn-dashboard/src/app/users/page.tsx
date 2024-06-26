/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";



export default function UsersPage({}:any) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Users Profile" />
      <h2>Users Profile</h2>
    </div>
  );
}
