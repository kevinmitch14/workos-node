import { RoleEvent, RoleEventResponse } from '../interfaces';

export const deserializeRole = (role: RoleEventResponse): RoleEvent => ({
  object: 'role',
  slug: role.slug,
});
