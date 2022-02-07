/******************************************************************************
 *
 * Copyright (c) 2018, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import perspective from "@finos/perspective";

import "@finos/perspective-viewer";
import "@finos/perspective-viewer-datagrid";
import "@finos/perspective-viewer-d3fc";

import "@finos/perspective-viewer/dist/css/themes.css";

import "./index.css";

import arrow_url from "superstore-arrow/superstore.arrow";

const worker = perspective.shared_worker();

window.addEventListener("DOMContentLoaded", async () => {
    const viewer = document.createElement("perspective-viewer");
    document.body.append(viewer);

    const req = await fetch(arrow_url);
    const arrow = await req.arrayBuffer();
    const table = worker.table(arrow);

    viewer.load(table);

    window.viewer = viewer;
});
