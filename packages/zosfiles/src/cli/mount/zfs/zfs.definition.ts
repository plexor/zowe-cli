/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/

import { ICommandDefinition } from "@zowe/imperative";
import { ZfsMountOptions } from "./zfs.options";

import i18nTypings from "../../-strings-/en";

// Does not use the import in anticipation of some internationalization work to be done later.
const fileStrings = (require("../../-strings-/en").default as typeof i18nTypings);
const zfsStrings = fileStrings.MOUNT.ACTIONS.ZFS;

export const ZfsDefinition: ICommandDefinition = {
    name: "zos-file-system",
    aliases: ["zfs"],
    summary: zfsStrings.SUMMARY,
    description: zfsStrings.DESCRIPTION,
    type: "command",
    handler: __dirname + "/zfs.handler",
    profile: {
        optional: ["zosmf"],
    },
    positionals: [
        {
            name: "fileSystemName",
            type: "string",
            description: zfsStrings.POSITIONALS.FILESYSTEMNAME,
            required: true,
        },
    ],
    options: [
        ZfsMountOptions.mountPoint,
        ZfsMountOptions.fstype,
        ZfsMountOptions.mode
    ].sort((a, b) => a.name.localeCompare(b.name)),
    examples: [
        {
            description: zfsStrings.EXAMPLES.EX1,
            options: "MY.ZFS --mp /a/ibmuser/mountdir"
        },
        {
            description: zfsStrings.EXAMPLES.EX2,
            options: "MY.ZFS --mp /a/ibmuser/mountdir --ft ZFS -m rdwr"
        }
    ]
};