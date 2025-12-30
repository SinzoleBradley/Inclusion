import { useQuery, useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertMessage } from "@shared/schema";
import { PROGRAMS, STORIES } from "@/lib/data";

// Programs Hooks
export function usePrograms() {
  return useQuery({
    queryKey: ["programs"],
    queryFn: async () => {
      return PROGRAMS;
    },
  });
}

// Stories Hooks
export function useStories() {
  return useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      return STORIES;
    },
  });
}

// Contact Form Mutation
export function useContactSubmit() {
  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      const validated = api.contact.submit.input.parse(data);
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to send message");
      }
      return api.contact.submit.responses[201].parse(await res.json());
    },
  });
}
