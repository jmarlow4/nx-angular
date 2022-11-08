import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, schema: any) {
  await libraryGenerator(tree, { name: schema.name });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}

// import { generate } from '@nstudio/angular';
// import { Schema as featureOptions } from './schema';

// export default function (options: featureOptions) {
//   if (options.module && !options.feature) {
//     // parse feature from module path
//     const parts = options.module.split('features/');
//     if (parts.length > 1) {
//       // user is targeting a feature module
//       const featurePath = parts[1];
//       const featureParts = featurePath.split('/');
//       if (featureParts.length > 1) {
//         // get the feature name
//         options.feature = featureParts[0];
//       }
//     } else {
//       // no feature determined so it will fallback to core
//     }
//   }
//   return generate('state', options);
// }
